local:
	yarn && yarn update-schema && yarn relay-compiler && yarn start

lint:
	yarn && yarn lint

flow:
	yarn && yarn flow

build:
	yarn && yarn relay && yarn build && yarn build:server

ci:
	yarn && yarn relay && yarn lint && yarn flow

docker-storybook:
	docker-compose up --build -d storybook

storybook:
	yarn && yarn storybook

docker-web:
	docker-compose up --build -d web

.PHONY: lint docker-storybook ci docker-web flow
