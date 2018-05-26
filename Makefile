.PHONY: dev

dev:
	@npm run build
	@npm start

build:
	@docker-compose build

up:
	@docker-compose up

down:
	@docker-compose down