# Mission Galaxy 🌌

## My first Three.js project

I discovered the [Three.js](https://threejs.org) framework few years ago but i never used it before. Thus, I followed the [Bruno Simon's three.js journey course](https://threejs-journey.com) starting in November. This is a project of the formation that I wanted to share with my community to show what I understood about it. I will explain you main parts of the development of this project and some notes I've taken.

## Particles ✨

The first step of this project was to use particles as stars of the galaxy. Thus, I created a square full of particles with a variable number of stars in it. These stars have a random position between -0.5 and 0.5 times my radius on x, y and z axis. That's why the render gives us a cube (sorry for this photo quality, next will be better).

<div class="single"><img src="/content/galaxy/step1.png" alt="Step 1"/></div>

## Galaxy branches 🙆🏼

Once particles appear, we can position them in a way to have a start of galaxy. I firstly put them with a variable number of branches before adding the spin rate number.

<div class="logo-grid">
  <img src="/content/galaxy/step2_1.png" alt="Step 2_1" />
  <img src="/content/galaxy/step2_2.png" alt="Step 2_2" />
  <img src="/content/galaxy/step3.png" alt="Step 3" />
</div>

To do it, I began to place them on a branch: the n'th star on the n modulo nb_branches branch. For each star, it's position on this branch is randomly assigned between 0 and the galaxy's radius. Every branches are uniformly rotated with the following angle: (k modulo nb_branches) / nb_branches * 2 pi.

Thus, the position vertex of a star is like: [x: cos(branch_angle + spin_angle) * radius, y: 0, z: sin(branch_angle + sping_angle) * radius]. Depending on the positiveness of the spin, the galaxy is oriented in a sense or another.

## Randomness 🎲

To look like a galaxy, we will use randomness further. I introduce two parameters: the randomness value and the randomness_power value. Then, we can reach the following result using more complex mathematics principles:

<div class="single"><img src="/content/galaxy/step4.png" alt="Step 4"/></div>

## Colors 🎨

In Three.js, objects of the THREE.Color class can call the .lerp(THREE.Color, number) method to have this gradient effect.

Using it, we can obtain a better result. And combining it to the THREE.AdditiveBlending material blending, we can have the 'light additive' effect when several colored particles are added one on others like on the center of the galaxy.

<div class="single"><img src="/content/galaxy/step5.png" alt="Step 5"/></div>

## Play with it 🎮

Now, I let you use and control those variables to create your own galaxy skin and send it to me on instagram or on twitter.

**Pssssst 🤫: if you press 'F' on your computer, you can have the full-screen 😉**

Have a nice day and see you soon ! ⭐️
