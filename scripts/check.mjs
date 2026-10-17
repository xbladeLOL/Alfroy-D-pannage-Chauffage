import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
async function walk(dir){const result=[];for(const entry of await readdir(dir,{withFileTypes:true})){if(['.git','node_modules','dist','qa'].includes(entry.name))continue;const full=path.join(dir,entry.name);if(entry.isDirectory())result.push(...await walk(full));else if(entry.name.endsWith('.html'))result.push(full);}return result;}
const outputRoot = process.argv.includes('--dist') ? path.join(root,'dist') : root;
const files=await walk(outputRoot);
let links=0;
for(const file of files){
  const html=await readFile(file,'utf8');
  assert.match(html,/<html lang="fr"/,'Langue française manquante');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`Un seul h1 requis : ${file}`);
  assert.match(html,/<meta name="viewport"/);
  assert.match(html,/<title>[^<]+<\/title>/);
  assert.match(html,/<meta name="description" content="[^"]+"/);
  assert(!/<svg|<canvas|<img|https?:\/\/[^"\s]+\.(png|jpe?g|webp)/i.test(html),'Visuel créé ou distant non autorisé');
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size,ids.length,`Identifiants dupliqués : ${file}`);
  for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    const href=m[1];if(!href.startsWith('/')&&!href.startsWith('#'))continue;
    const [pathname,hash]=href.split('#');
    if(!pathname){assert(ids.includes(hash),`Ancre absente ${href} dans ${file}`);continue;}
    const route=pathname.split('?')[0];
    const target=path.join(outputRoot,route.endsWith('/')?route+'index.html':route);
    assert(await stat(target).catch(()=>null),`Lien local absent ${href} dans ${file}`);
    if(hash){const content=await readFile(target,'utf8');assert(content.includes(`id="${hash}"`),`Ancre cible absente : ${href}`);}
    links++;
  }
  assert(html.includes('tel:+33238554413'),'Téléphone attendu');
}
const js=await readFile(path.join(outputRoot,'assets/app.js'),'utf8');
assert(!/localStorage|sessionStorage|fetch\(|XMLHttpRequest/.test(js),'Stockage ou envoi inattendu dans le formulaire');
console.log(`OK : ${files.length} pages, ${links} liens et ressources locaux, ancres, métadonnées, téléphone et absence de visuels générés.`);

if (outputRoot !== root) {
  for (const name of ['scripts','docs','.git','node_modules','package.json']) assert(!(await stat(path.join(outputRoot,name)).catch(()=>null)), 'Fichier de développement dans dist : '+name);
}
