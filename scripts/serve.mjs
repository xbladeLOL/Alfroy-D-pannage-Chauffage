import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const port=Number(process.env.PORT||4173);
const redirects={'/contact.php':'/contact/','/la-societe.php':'/la-societe/','/pompes-a-chaleur.php':'/pompes-a-chaleur/','/index.php':'/','/index.html':'/'};
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.json':'application/json; charset=utf-8'};
createServer(async(req,res)=>{
  try {
    const url=new URL(req.url,'http://localhost');
    if(redirects[url.pathname]){res.writeHead(301,{Location:redirects[url.pathname]+url.search});res.end();return;}
    const decoded=decodeURIComponent(url.pathname);
    let file=path.resolve(root,'.'+decoded);
    if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);res.end('Accès refusé');return;}
    if((await stat(file).catch(()=>null))?.isDirectory())file=path.join(file,'index.html');
    let status=200;
    let data=await readFile(file).catch(async()=>{status=404;file=path.join(root,'404.html');return readFile(file);});
    res.writeHead(status,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);
  }catch{res.writeHead(400);res.end('Requête invalide');}
}).listen(port,'127.0.0.1',()=>console.log(`Alfroy : http://127.0.0.1:${port}`));
