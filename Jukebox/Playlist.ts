namespace Jukebox {
    export class Playlist {

        public songs: Jukebox.Audio.Song[];

        private _strategy: Jukebox.Strategies.NextSongStrategy;

        constructor() {
            this.songs = [];
            this._strategy = new Jukebox.Strategies.QueuedPlaylistStrategy();
        }

        set strategy(strategy: Jukebox.Strategies.NextSongStrategy) {
            this._strategy = strategy;
        }

        get strategy() {
            return this._strategy;
        }

        play() {
            return this.next().play();
        }

        next() {
            return this.strategy.next(this.songs);
        }
    }
}
