run:
	npm run dev
db:
	docker run --name blockchain -e POSTGRES_PASSWORD=secret POSTGRES_USER=user -d postgres