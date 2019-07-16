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
                console.log(" * Playing '\x1b[1m%s\x1b[0m' by \x1b[1m%s\x1b[0m", this.title, this.artist);
            }
        }
    }
}
