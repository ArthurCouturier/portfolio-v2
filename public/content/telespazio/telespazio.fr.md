## Un projet d'observation spatiale 🔭

Telespazio est une société du groupe franco-italien Thales, active dans l'industrie de l'observation spatiale. J'ai travaillé sur un projet dont l'objectif était de collecter puis de traiter des données spatiales. Le premier but était de construire un système capable de collecter et de fournir massivement de la donnée spatiale. Dans un second temps, j'ai conçu et implémenté un système de traitement de données : une plateforme sur laquelle l'utilisateur peut enchaîner des algorithmes de traitement exactement comme il les imagine.

## Collecte de données 🧺

Pour construire le système de collecte et de mise à disposition à grande échelle, je me suis appuyé en grande partie sur un framework Python interne. Il fournit des collecteurs de base et utilise une base de données <a href="https://opensearch.org" target="_blank">OpenSearch</a> (une alternative libre à <a href="https://www.elastic.co/fr/elasticsearch" target="_blank">ElasticSearch</a>). J'ai implémenté les modèles de données et créé mes propres collecteurs et configurations pour répondre aux problématiques de collecte. L'ensemble repose aussi sur des micro-services parallèles comme <a href="https://www.rabbitmq.com" target="_blank">RabbitMQ</a>, un backend <a href="https://fastapi.tiangolo.com" target="_blank">FastAPI</a> développé de zéro pour exposer une API OData, ou encore un <a href="https://www.keycloak.org" target="_blank">Keycloak</a> pour sécuriser toute la plateforme.

## Système de traitement de données ⛓️

Le système de traitement a été plus difficile à réaliser : aucune solution interne similaire n'existait. J'ai donc conçu l'architecture d'un tel système. Le but principal était de rendre l'utilisateur acteur de sa propre chaîne de traitement, sans se heurter à des problèmes de type de données ou à des erreurs 404 à travers de multiples appels d'API REST. Je l'ai développé en Java avec le framework Spring pour la partie chaînage, et en FastAPI pour la partie traitement — chaque algorithme étant un micro-service à part entière.

## Mise en production 🎬

Tout au long de la mission, j'ai utilisé GitLab CI comme gestionnaire d'intégration continue. J'y ai dockerisé mes applications et poussé les images dans un registre <a href="https://goharbor.io" target="_blank">Harbor</a>. J'ai ensuite écrit des <a href="https://helm.sh" target="_blank">Helm charts</a> personnalisés pour déployer mes applications sur un cluster <a href="https://kubernetes.io" target="_blank">Kubernetes</a> interne, dans un environnement sécurisé.

## Une belle expérience ⭐️⭐️⭐️⭐️⭐️

J'ai porté ce travail de bout en bout, de l'architecture à la production. C'était l'occasion parfaite d'apprendre et de développer de nombreuses compétences techniques, aux côtés d'une chouette équipe. Ce fut aussi un moment privilégié pour travailler dans un contexte international : Telespazio étant une entreprise franco-italienne 🇫🇷🇮🇹, j'ai collaboré (en anglais) avec une équipe italienne sur la construction de cette plateforme — et j'en ai retiré de nouvelles façons de travailler.
