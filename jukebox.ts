
import * as JukeboxAudio from './Jukebox/Audio';
import * as JukeboxPlaylist from './Jukebox/Playlist';
import * as JukeboxStrategies from './Jukebox/Strategies';

var playlist = new JukeboxPlaylist.Playlist();

playlist.strategy = new JukeboxStrategies.RandomPlaylistStrategy();

playlist.songs.push(new JukeboxAudio.Song("Du Hast", "Rammstein"));
playlist.songs.push(new JukeboxAudio.Song("Deutschland", "Rammstein"));
playlist.songs.push(new JukeboxAudio.Song("Psychosocial", "Slipknot"));
playlist.songs.push(new JukeboxAudio.Song("Born to be wild", "Steppenwolf"));
playlist.songs.push(new JukeboxAudio.Song("Beautiful People", "Marylin Manson"));
playlist.songs.push(new JukeboxAudio.Song("Bismark", "Sabaton"));
playlist.songs.push(new JukeboxAudio.Song("Smell like teen spirit", "Nirvana"));
playlist.songs.push(new JukeboxAudio.Song("Do the Evolution", "Pearl Jam"));
playlist.songs.push(new JukeboxAudio.Song("Iron Man", "Black Sabbath"));
playlist.songs.push(new JukeboxAudio.Song("Stairway to Heaven", "Led Zeppelin"));

try {
    for (var x = 0; x < playlist.songs.length; x++) {
        playlist.play();
    }
} catch (e) {
    console.log(e);
}
