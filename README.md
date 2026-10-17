# Alfroy Dépannage Chauffage

Refonte statique du site Alfroy. HTML, CSS et JavaScript natifs ; aucune dépendance, aucune police distante et aucun outil de suivi.

## Utilisation

- `npm run build` : génère les pages HTML à partir de `scripts/build.mjs`.
- `npm run check` : vérifie les pages, liens internes, ancres, téléphone, métadonnées et l’absence de visuels générés.
- `npm start` : aperçu local à l’adresse `http://127.0.0.1:4173`.

Les fichiers HTML générés sont suivis dans Git. Le site peut donc être publié sans compilation. Pour Cloudflare Pages : préréglage **None**, commande de compilation `npm run build` (ou vide), répertoire de sortie `.` et branche de production `main`. Les fichiers `_redirects` et `_headers` fournissent les redirections historiques et les en-têtes.

## Modifier le site

- Pages et contenus : `scripts/build.mjs`, puis `npm run build`.
- Styles et responsive : `assets/style.css`.
- Menu, filtres et récapitulatif du formulaire : `assets/app.js`.
- Rapport d’analyse et limites : `docs/AUDIT.md`.

## Fonctionnalités et limites

Les liens téléphoniques, la navigation, les filtres et le lien d’itinéraire sont opérationnels. Le formulaire ne transmet aucun message : il prépare un récapitulatif à copier ou télécharger. Aucun e-mail ni serveur d’envoi n’a été inventé. Les coordonnées saisies restent en mémoire dans la page jusqu’à sa fermeture ou son rechargement, sauf copie ou téléchargement volontaire.

Les visuels indisponibles sont remplacés par des rectangles blancs à bordure fine et libellé centré, y compris le logo. Aucune image, icône, illustration, carte ou réalisation graphique de remplacement n’a été créée. Les signes typographiques des boutons sont des éléments habituels de navigation.

Les qualifications sont celles présentées par le site source ; leurs attestations en cours de validité restent à demander à l’entreprise. Les documents juridiques complets restent à fournir. Les limites d’accès au site source et les résultats de vérification sont documentés dans le rapport d’audit.
