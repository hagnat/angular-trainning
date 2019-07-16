
clear:
	rm -R *.js

jukebox.js:
	tsc --target ES5 --module system --outFile jukebox.js jukebox.ts

jukebox: clear jukebox.js
	node jukebox.js
