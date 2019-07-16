namespace Jukebox {
    export class Playlist {
        public songs: Jukebox.Audio.Song[];
        private strategy: Jukebox.Strategies.NextSongStrategy;

        constructor(strategy: Jukebox.Strategies.NextSongStrategy) {
            this.songs = [];
            this.strategy = strategy;
        }

        play() {
            return this.next().play();
        }

        next() {
            return this.strategy.next(this.songs);
        }
    }
}
