
import * as JukeboxAudio from './Audio';
import * as JukeboxStrategies from './Strategies';

export class Playlist {

    public songs: JukeboxAudio.Song[];

    private _strategy: JukeboxStrategies.NextSongStrategy;

    public constructor() {
        this.songs = [];
        this._strategy = new JukeboxStrategies.QueuedPlaylistStrategy();
    }

    /**
     * not really needed, but doing this for the exercise
     */
    public set strategy(strategy: JukeboxStrategies.NextSongStrategy) {
        this._strategy = strategy;
    }

    public get strategy() {
        return this._strategy;
    }

    public play() {
        return this.next().play();
    }

    public next() {
        return this.strategy.next(this.songs);
    }
}
