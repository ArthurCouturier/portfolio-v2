# Mission Telespazio 🛰️

🏗️ This page is under construction actually.

## A Space Observation Project 🔭

I worked on a Space Observation Project. This project has the aim to collect then process space data. The first main purpose of this mission was to create a system to collect and provide massively space data. In a second time, I had to design then implement a data processing system with the goal to provide a platform on which the user can create chains of data processing algorithms as he imagines.

## Data Collection 🧺

In order to create the data collection and massive providing system, I almost used an internal Python 🐍 framework. This framework provides base collectors and uses <a href="https://opensearch.org" target="_blank">OpenSearch</a> (a free alternative to  <a href="https://www.elastic.co/fr/elasticsearch" target="_blank">ElasticSearch</a>) database 𝌞. I needed to implement database models and create my own collectors and configurations to fit my collecting issues. This whole system also use other parallel micro-services like <a href="https://www.rabbitmq.com" target="_blank">RabbitMQ</a> 🐰, a <a href="https://fastapi.tiangolo.com" target="_blank">FastAPI</a> backend service to develop from scratch to implement an OData API, or even a <a href="https://www.keycloak.org" target="_blank">Keycloak</a> implementation to secure the whole system.

## Data Processing System ⛓️

The data processing system was quite harder to make. The fact is that any similar internal solution existed. That's why I designed the architecture of such a system. The main purpose was to let the user the main actor of his own processing chain, without facing problems of data type or 404 errors 🤖 using lots of Rest API calls. I developped it in Java using the Spring framework for the chaining part and FastAPI for the processing part because each algorithm had to be a single micro-service.

## Production 🎬

All along my mission at Telespazio, I used GitlabCI as my CI manager. In this CI, I dockerized 🐳 my appplications and pushed images in a <a href="https://goharbor.io" target="_blank">Harbor</a> 🧭 repository. Then, I developped personalized <a href="https://helm.sh" target="_blank">Helm Charts</a> ⚓️ to deploy my app on an internal <a href="https://kubernetes.io" target="_blank">Kubernetes</a> 🚢 cluster.

## A good experience ⭐️⭐️⭐️⭐️⭐️

I'm really happy to worked on this project. It was the perfect occasion to learn and develop lots of technical skills. I also worked with a pretty team with which I grew up for a year. This period was also a good moment to work in an international context because Telespazio is a Franco-Italian 🇫🇷🇮🇹 company and I could work with an italian team on the develop of this platform. Though, I learnt other ways of developping and tips and tricks from another country.
