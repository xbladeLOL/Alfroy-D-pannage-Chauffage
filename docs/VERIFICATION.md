# Vérifications locales — Alfroy

Date : 17 octobre 2026.

- Génération de 9 documents HTML, dont la page 404 : OK.
- Contrôle de 181 liens et ressources internes, des ancres, des métadonnées, des identifiants uniques et du téléphone : OK.
- Vérification syntaxique du JavaScript et du générateur : OK.
- HTTP : 8 pages principales en 200, page inconnue en 404, type HTML correct.
- Anciennes adresses contact.php, la-societe.php et pompes-a-chaleur.php : redirections 301 vers leurs équivalents.
- Contrôle dans le navigateur des 8 pages à 320, 390, 768 et 1280 px : 32 contrôles, aucun débordement horizontal après correction.
- Inspection visuelle accueil ordinateur, accueil mobile, menu mobile, contact mobile et galerie filtrée : OK.
- Menu mobile : ouverture, navigation, fermeture après clic et avec Échap, retour du focus au bouton : OK.
- FAQ native : ouverture de la réponse : OK.
- Sujet du contact prérempli depuis les prestations chauffage et pompe à chaleur : OK.
- Champs requis, e-mail invalide et champ composé uniquement d’espaces : refus correct.
- Préparation du récapitulatif avec données fictives, focus sur le résultat et mention explicite d’absence d’envoi : OK.
- Copie du récapitulatif : OK.
- Téléchargement du récapitulatif texte via le navigateur : OK.
- Filtre Pompes à chaleur : une installation affichée et URL mise à jour ; état annoncé par une zone aria-live : OK.
- Liens téléphoniques et adresse cible du lien d’itinéraire : valeurs vérifiées ; aucun appel réel effectué.
- Aucun img, SVG ni canvas dans les pages. Emplacements blancs pour les visuels indisponibles : OK.
- Aucune erreur ou alerte JavaScript relevée pendant les parcours locaux.
- Aucun stockage local ni appel réseau programmé dans le formulaire. Aucune dépendance externe.

Les captures de vérification restent dans le dossier d’essai ; elles ne font pas partie des visuels du site.

La vérification du déploiement intervient après le push, avec une attente minimale de trois minutes. Son résultat définitif est consigné dans le compte rendu de la conversation et dans le dossier d’essai, sans prétendre à une publication vérifiée avant observation.

## Correction de publication
Le premier déploiement a échoué car Cloudflare Pages attend le répertoire dist. Le générateur produit désormais ce répertoire avec seulement les pages HTML, assets, redirections, en-têtes, robots et sitemap. Un second contrôle vérifie les liens dans cette sortie et l’absence des scripts et documents de développement.
