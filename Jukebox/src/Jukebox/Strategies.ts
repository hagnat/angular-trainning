
import * as JukeboxAudio from './Audio';

export interface NextSongStrategy {
    next(songs: JukeboxAudio.Song[]): JukeboxAudio.Song;
}

export class RandomPlaylistStrategy implements NextSongStrategy{
    public next(songs: JukeboxAudio.Song[]) {
        var songCount = songs.length;
        if (0 == songCount) {
            throw new Error("There are no music to play");
        }

        var key = Math.floor(Math.random() * songCount);

        return songs[key];
    }
}

export class QueuedPlaylistStrategy implements NextSongStrategy {

    private current = -1;

    public next(songs: JukeboxAudio.Song[]) {
        if (0 == songs.length) {
            throw new Error("There are no music to play");
        }

        this.current = ++this.current % songs.length;

        return songs[this.current];
    }
}

export class SortPlaylistStrategy implements NextSongStrategy {

    private queuedStrategy: QueuedPlaylistStrategy;

    public constructor() {
        this.queuedStrategy = new QueuedPlaylistStrategy();
    }

    public next(songs: JukeboxAudio.Song[]) {
        if (0 == songs.length) {
            throw new Error("There are no music to play");
        }

        var sortedSongs = songs.sort(this.compareSongTitles);

        return this.queuedStrategy.next(sortedSongs);
    }

    private compareSongTitles(x: JukeboxAudio.Song, y: JukeboxAudio.Song) {
        if (x.title.toUpperCase() == y.title.toUpperCase()) {
            return 0
        }
        return x.title.toUpperCase() > y.title.toUpperCase() ? 1 : -1;
    }
}
