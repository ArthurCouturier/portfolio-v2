## A space-observation project 🔭

Telespazio is a Franco-Italian Thales group company working in the space-observation industry. I worked on a project whose goal was to collect and then process space data. The first purpose was to build a system to collect and serve space data at scale. In a second phase, I designed and implemented a data-processing system: a platform on which a user can chain data-processing algorithms exactly as they imagine them.

## Data collection 🧺

To build the large-scale collection and serving system, I relied mostly on an internal Python framework. It provides base collectors and uses an <a href="https://opensearch.org" target="_blank">OpenSearch</a> database (a free alternative to <a href="https://www.elastic.co/elasticsearch" target="_blank">ElasticSearch</a>). I implemented the database models and built my own collectors and configurations to fit the collection challenges. The whole system also relies on parallel micro-services such as <a href="https://www.rabbitmq.com" target="_blank">RabbitMQ</a>, a <a href="https://fastapi.tiangolo.com" target="_blank">FastAPI</a> backend I developed from scratch to expose an OData API, and a <a href="https://www.keycloak.org" target="_blank">Keycloak</a> setup to secure the whole platform.

## Data-processing system ⛓️

The data-processing system was harder to build, as no similar internal solution existed. I therefore designed the architecture of such a system. The main goal was to make the user the actor of their own processing chain, without facing data-type issues or 404 errors across many REST API calls. I developed it in Java with the Spring framework for the chaining part, and FastAPI for the processing part — each algorithm being its own micro-service.

## Production 🎬

Throughout the mission I used GitLab CI as my CI manager. There, I dockerized my applications and pushed images to a <a href="https://goharbor.io" target="_blank">Harbor</a> registry. I then wrote custom <a href="https://helm.sh" target="_blank">Helm charts</a> to deploy the apps on an internal <a href="https://kubernetes.io" target="_blank">Kubernetes</a> cluster, in a secure environment.

## A great experience ⭐️⭐️⭐️⭐️⭐️

I owned this work end-to-end, from architecture to production. It was a perfect opportunity to learn and grow many technical skills, alongside a great team. It was also a chance to work in an international context: Telespazio being a Franco-Italian 🇫🇷🇮🇹 company, I collaborated with an Italian team (in English) on building this platform — and picked up new ways of working along the way.
