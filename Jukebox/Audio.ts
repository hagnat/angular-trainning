
export class Song {

    public title: string;

    public artist: string;

    public constructor(title: string, artist: string) {
        this.title = title;
        this.artist = artist;
    }

    public play() {
        console.log(" * Playing '\x1b[1m%s\x1b[0m' by \x1b[1m%s\x1b[0m", this.title, this.artist);
    }
}
