
.DEFAULT_GOAL := all

clear:
	@echo "=> Removes all parsed javascript files..."
	find build/ -name "*.js" -exec rm -rf {} \;

build/app.js:
	@echo "=> Building Jukebox..."
	tsc -p .
	@echo "Build complete!\n"

play: build/app.js
	@echo "=> Plays the Jukebox!"
	node build/app.js

all: clear build/app.js
