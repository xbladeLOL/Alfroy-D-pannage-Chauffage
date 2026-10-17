# Analyse et cartographie — Alfroy

Date : 17 octobre 2026. Source : https://www.alfroy.com/ ; cible : https://alfroy-d-pannage-chauffage.pages.dev/.

## Conditions d’accès et portée

Le site source en HTTP redirige vers HTTPS. Le navigateur et le client HTTP refusent le certificat HTTPS pour une incompatibilité de nom de domaine. La protection n’a pas été contournée. L’analyse des contenus repose donc sur les pages indexées retrouvées par recherche, et non sur une inspection visuelle complète du site source.

Le comportement réel des menus, du carrousel éventuel, du formulaire et de l’affichage ordinateur/mobile de l’ancienne version n’a pas pu être testé. Aucune conclusion visuelle non observée n’est présentée comme établie. La cartographie ci-dessous est celle des pages effectivement identifiées ; d’autres pages non indexées peuvent exister.

Avant intervention, le dossier d’essai du Bureau est vide. Le dépôt Documents/GitHub est propre sur `main`, suit `origin/main`, et contient seulement `chatgpt enleve.txt`, conservé. Dépôt distant : https://github.com/xbladeLOL/Alfroy-D-pannage-Chauffage.git. Aucun AGENTS.md supplémentaire trouvé dans les dossiers concernés ou leurs parents inspectés.

La cible publiée renvoie initialement une erreur Cloudflare 522, constatée dans le navigateur et par requête HTTP. Cette erreur précède la refonte.

## Cartographie des contenus identifiés

| Page source | Contenus et fonctions identifiés | Équivalent |
| --- | --- | --- |
| `/` | Présentation, chaudières, photos et légendes d’installations, qualifications QUALIBAT/RGE, présentation des CEE, zone d’intervention | `/`, `/chauffage/`, `/depannage-entretien/`, `/realisations/`, `/la-societe/` |
| `/la-societe.php` | Présentation, installation/entretien/dépannage, chauffage central, plomberie, recherche de fuite, marques ATLANTIC/CHAPPÉE/FRISQUET | `/la-societe/` et pages de prestations ; redirection 301 |
| `/pompes-a-chaleur.php` | Principe des PAC, réversibilité, conseil, installation, fluides frigorigènes, qualification RGE QualiPAC, installation Atlantic | `/pompes-a-chaleur/` ; redirection 301 |
| `/contact.php` | Adresse, téléphone, fax, formulaire société/prénom/nom/e-mail/téléphone/adresse/code postal/ville | `/contact/` ; redirection 301 |

Les pages de contenu indexées sont consultables aux adresses suivantes :

- https://www.alfroy.com/
- https://www.alfroy.com/la-societe.php
- https://www.alfroy.com/pompes-a-chaleur.php
- https://www.alfroy.com/contact.php

## Informations préservées

- Alfroy Dépannage Chauffage, activité chauffage / chaudières / pompes à chaleur / climatisation.
- 58, rue du Poirier Rond, 45000 Orléans.
- Téléphone : 02 38 55 44 13 ; fax : 02 38 55 83 13.
- Région orléanaise, Loiret et Loir-et-Cher. Prise en charge d’une commune à confirmer par téléphone.
- Particuliers, collectivités et industrie.
- Installation, mise en service, maintenance, révision, réparation, recherche de fuite et dépannage de plomberie.
- Qualifications et fabricants cités par l’entreprise, sans faux certificat ni ajout de qualification. Validité à confirmer par les attestations.
- Six descriptions d’installations issues du site : FRISQUET gaz et gaz au sol ; HARGASSNER bois/granulés ; CHAPPÉE fioul ; bois déchiqueté 100 kW pour château ; pompe à chaleur Atlantic.
- Champs du formulaire utiles à la préparation d’une demande.

## Problèmes de contenu constatés et décisions

- Certificat source invalide : l’accès à l’information est bloqué dans le navigateur utilisé.
- Ancien contenu d’aides indexé évoquant des taux et dispositifs qui ne doivent pas être promis : remplacé par une mention neutre, sans montant ni conseil financier personnalisé.
- Services détaillés sur l’accueil et la société : répartis dans des pages dédiées pour un accès direct.
- Descriptions de réalisations identifiées mais visuels inaccessibles : galerie filtrable avec emplacements blancs, sans fausse photo de chantier.
- Coordonnées présentes sur la page contact : rendues accessibles depuis l’accueil, le pied de page et la page dépannage.
- Aucun témoignage vérifié identifié : aucun avis ajouté.
- Aucun e-mail ni mécanisme d’envoi exploitable identifié : formulaire de préparation locale explicitement présenté comme tel. L’envoi de messages n’est pas opérationnel ; un véritable service d’envoi reste à connecter avec les coordonnées réelles de l’entreprise.
- Aucune mention légale complète, politique de confidentialité de l’exploitant ni CGV fournie : absence indiquée sur une page d’information ; aucun texte juridique fictif créé.

## Direction et navigation

Vert profond, fond ivoire, hiérarchie typographique sobre mêlant titres serif et textes sans serif, espacements généreux et composants rectangulaires. Aucune dépendance externe pour le rendu. Emplacements graphiques exclusivement blancs, avec bordure et libellé.

Navigation principale : Chauffage, Pompes à chaleur, Réalisations, L’entreprise, Contact. Dépannage/entretien accessible depuis l’accueil, chaque pied de page et la page chauffage. Fil d’Ariane sur les pages internes, lien d’évitement, lien de retour en haut et page 404.

Parcours principaux :

1. Accueil → prestation → contact avec sujet prérempli → téléphone ou préparation locale de la demande.
2. Accueil → dépannage → téléphone ou formulaire prérempli.
3. Réalisations → filtre par famille → demande sur un projet similaire.
4. Entreprise → qualifications → contact.
5. Contact → adresse → itinéraire Google Maps, chargé seulement après clic.

## Visuels à fournir

Logo original ; photo d’installation pour l’accueil ; photo d’équipe/entreprise ; photos chaudières et PAC des pages de prestations ; six photographies de réalisations ; carte de localisation si un visuel local est souhaité. Tous les emplacements correspondants sont blancs, bordés et libellés. Aucun visuel généré n’est intégré.

## Vérification

Les résultats des contrôles locaux et de publication sont consignés dans `docs/VERIFICATION.md`.
