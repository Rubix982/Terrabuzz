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