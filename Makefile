all: 
	npm install
	npm run dev

build:
	npm install
	npm run build

clean:
	rm -rf node_modules
	rm -rf dist

.PHONY: all build clean