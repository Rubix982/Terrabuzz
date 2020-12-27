build-prod:
	sudo docker-compose -f docker-compose.yaml up --build

up-prod:
	sudo docker-compose -f docker-compose.yaml up

stop:
	docker container stop $(docker ps -aq)

delete:
	docker container rm $(docker ps -aq)

remove:
	sudo docker-compose down --remove-orphans

build:
	sudo docker-compose -f docker-compose.dev.yaml up --build

up:
	sudo docker-compose -f docker-compose.dev.yaml up

ps:
	sudo docker-compose ps -a

primary:
	sudo docker exec -it primary bash

secondary:
	sudo docker exec -it secondary bash

graphdb:
	sudo docker exec -it graphdb bash

cache:
	sudo docker exec -it cache-store bash