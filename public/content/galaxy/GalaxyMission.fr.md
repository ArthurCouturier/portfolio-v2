# Mission Galaxy 🌌

## Mon premier projet Three.js

J'ai découvert le framework [Three.js](https://threejs.org) il y a quelques années mais je ne l'avais jamais utilisé. J'ai donc suivi le [cours Three.js Journey de Bruno Simon](https://threejs-journey.com) à partir de novembre. C'est un projet de la formation que je voulais partager avec ma communauté pour montrer ce que j'en ai compris. Je vais t'expliquer les principales parties du développement de ce projet ainsi que quelques notes que j'ai prises.

## Particules ✨

La première étape de ce projet était d'utiliser des particules comme étoiles de la galaxie. J'ai donc créé un carré rempli de particules, avec un nombre d'étoiles variable. Ces étoiles ont une position aléatoire comprise entre -0,5 et 0,5 fois mon rayon sur les axes x, y et z. C'est pourquoi le rendu nous donne un cube (désolé pour la qualité de cette photo, la prochaine sera meilleure).

<div class="single"><img src="/content/galaxy/step1.png" alt="Étape 1"/></div>

## Branches de la galaxie 🙆🏼

Une fois les particules apparues, on peut les positionner de manière à amorcer une galaxie. Je les ai d'abord disposées avec un nombre de branches variable, avant d'ajouter le taux de rotation (spin).

<div class="logo-grid">
  <img src="/content/galaxy/step2_1.png" alt="Étape 2_1" />
  <img src="/content/galaxy/step2_2.png" alt="Étape 2_2" />
  <img src="/content/galaxy/step3.png" alt="Étape 3" />
</div>

Pour cela, j'ai commencé par les placer sur une branche : la n-ième étoile sur la branche n modulo nb_branches. Pour chaque étoile, sa position sur cette branche est assignée aléatoirement entre 0 et le rayon de la galaxie. Toutes les branches sont réparties uniformément selon l'angle suivant : (k modulo nb_branches) / nb_branches × 2π.

Ainsi, le vertex de position d'une étoile ressemble à : [x : cos(angle_branche + angle_spin) × rayon, y : 0, z : sin(angle_branche + angle_spin) × rayon]. Selon le signe du spin, la galaxie est orientée dans un sens ou dans l'autre.

## Aléatoire 🎲

Pour vraiment ressembler à une galaxie, on va pousser l'aléatoire un peu plus loin. J'introduis deux paramètres : la valeur `randomness` (aléa) et la valeur `randomness_power` (puissance de l'aléa). On atteint alors le résultat suivant à l'aide de principes mathématiques un peu plus complexes :

<div class="single"><img src="/content/galaxy/step4.png" alt="Étape 4"/></div>

## Couleurs 🎨

Dans Three.js, les objets de la classe THREE.Color peuvent appeler la méthode `.lerp(THREE.Color, number)` pour obtenir cet effet de dégradé.

En l'utilisant, on obtient un bien meilleur résultat. Et en le combinant au blending de matériau `THREE.AdditiveBlending`, on obtient l'effet « addition de lumière » lorsque plusieurs particules colorées se superposent — comme au centre de la galaxie.

<div class="single"><img src="/content/galaxy/step5.png" alt="Étape 5"/></div>

## À toi de jouer 🎮

Maintenant, je te laisse manipuler ces variables pour créer ta propre galaxie et me l'envoyer sur Instagram ou sur Twitter.

**Pssssst 🤫 : si tu appuies sur « F » sur ton ordinateur, tu passes en plein écran 😉**

Bonne journée, et à bientôt ! ⭐️
