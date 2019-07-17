
.DEFAULT_GOAL := build

clear:
	@echo "=> Removes all parsed javascript files..."
	find build/ -name "*.js" -exec rm -rf {} \;

build/app.js: clear
	@echo "=> Building Jukebox..."
	tsc -p .
	@echo "Build complete!"

play: build/app.js
	@echo "=> Plays the Jukebox!"
	node build/app.js

build: clear build/app.js
