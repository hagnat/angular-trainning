
clear:
	rm -R *.js

jukebox.js:
	tsc --module system --outFile jukebox.js jukebox.ts

jukebox: jukebox.js
	node jukebox.js
