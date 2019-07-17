
.DEFAULT_GOAL := all

clear:
	@echo "=> Removes all parsed javascript files..."
	rm -rf *.js

jukebox.js:
	@echo "=> Building Jukebox..."
	tsc --target ES5 jukebox.ts
	@echo "Build complete!\n"

jukebox: jukebox.js
	@echo "=> Plays the Jukebox!"
	node jukebox.js

all: clear jukebox
