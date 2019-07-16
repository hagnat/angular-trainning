namespace Jukebox {
    export namespace Strategies {

        export interface NextSongStrategy {
            next(songs: Jukebox.Audio.Song[]): Jukebox.Audio.Song;
        }

        export class RandomPlaylistStrategy implements NextSongStrategy{
            next(songs: Jukebox.Audio.Song[]) {
                var songCount = songs.length;
                if (0 == songCount) {
                    return new Jukebox.Audio.Song('<no songs>', '<nobody>');
                }

                var key = Math.floor(Math.random() * songCount);

                return songs[key];
            }
        }

        export class OrderedPlaylistStrategy implements NextSongStrategy {
            private current = -1;

            next(songs: Jukebox.Audio.Song[]) {
                if (0 == songs.length) {
                    return new Jukebox.Audio.Song('<no songs>', '<nobody>');
                }

                this.current = ++this.current % songs.length;

                return songs[this.current];
            }
        }
    }
}
