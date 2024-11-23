# Mission Pepperz.app 🌶️

## Project Vision & Evolution 👀

In Spring 2024, I wanted to develop a new web application using React and a Java / SpringBoot backend. This application had to achieve 2 goals: expose in a concrete case part of my skills and enjoy to develop a new application on my free time. Thus, I decided to create a cooking web application because I love cooking. Some days later, I decided to turn this application (that was most a marmitton-like) to an application specialized in pepper.

## AI Involved 🤖

In the aim to develop first assets, I used OpenAI's Dall.e. It generated me first images of a pepper social network involving users but most of all ideas of logo to add on my application. These are examples of suggested logos:

<div class="logo-grid">
  <img src="/content/pepperz/logo1.png" alt="Logo 1" />
  <img src="/content/pepperz/logo2.png" alt="Logo 2" />
  <img src="/content/pepperz/logo3.png" alt="Logo 3" />
  <img src="/content/pepperz/logo4.png" alt="Logo 4" />
</div>

You can remark the AI mixed types of peppers. In french 🇫🇷, "poivre" only means "black pepper" and "poivron" means others. I didn't know it before but that's why it's mixing colors on logos.

## Features ✨

I made several features in the app. First, the user can browse between 4 types of black pepper. In every type of pepper, the user can see species and information like a description, the price per kilo, the location or even labels on which he can browse. The user can also rate peppers if he liked one or not.

I implemented a secured logging system using Google. This logging system is secured by provided token access. This is used to create a new type of pepper for example that can be approved by an administrator (thus, I created a role system). This was more a technical challenge than a real usual need. If I wanted to go further on this point, I could imagine an implementation of KrakenD and Keycloak to secure more efficiently my API.

<div class="logo-grid">
  <img src="/content/pepperz/screen1.jpg" alt="Logo 1" />
  <img src="/content/pepperz/screen2.jpg" alt="Logo 2" />
  <img src="/content/pepperz/screen3.jpg" alt="Logo 3" />
  <img src="/content/pepperz/screen4.jpg" alt="Logo 4" />
</div>

## Technologies employed ⚙️

To make this application, I wanted to use my favorite (and not less classic) language: Java with the Spring Framework for the back. Why Java and not Next? Because I used Next for other applications but I wanted to present my skills on Java that I use for more time. The Spring framework is really efficiency to make Rest API.

For the front, I used React because, over being my favorite front framework, it's the most common front JS framework nowadays according to <a href="https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/" target="_blank">Statistica</a>.

For the deployment, I used Vercel △ to deploy the front and a personnal VPS on which I deployed the dockerized 🐳 back.
