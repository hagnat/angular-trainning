namespace Jukebox {

    export namespace Audio {

        export class Song {
            title: string;
            artist: string;

            constructor(title: string, artist: string) {
                this.title = title;
                this.artist = artist;
            }

            play() {
                console.log("Playing '" + this.title + "' by " + this.artist);
            }
        }
    }
}
