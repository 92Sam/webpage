#/bin/sh

build_container: /
	docker-compose --env-file ./.env -f docker-compose.yml build

up_container: /
	docker-compose --env-file ./.env -f docker-compose.yml up

down_container: /
	docker-compose --env-file ./.env -f docker-compose.yml down

build_image: /
	docker build -t treyee-webpage:1.0 .

run_image: /
	docker run -d -p 1000:80 --name treyee-webpage treyee-webpage:1.0

start_image: /
	docker start -p 1000:80 treyee-webpage:1.0

run_dev: 
	npm run dev
