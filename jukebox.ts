
/// <reference path="Jukebox/Audio.ts" />
/// <reference path="Jukebox/Strategies.ts" />
/// <reference path="Jukebox/Playlist.ts" />

var playlist = new Jukebox.Playlist();

playlist.strategy = new Jukebox.Strategies.OrderedPlaylistStrategy();
// playlist.strategy = new Jukebox.Strategies.RandomPlaylistStrategy();

playlist.songs.push(new Jukebox.Audio.Song("Du Hast", "Rammstein"));
playlist.songs.push(new Jukebox.Audio.Song("Deutschland", "Rammstein"));
playlist.songs.push(new Jukebox.Audio.Song("Psychosocial", "Slipknot"));
playlist.songs.push(new Jukebox.Audio.Song("Born to be wild", "Steppenwolf"));
playlist.songs.push(new Jukebox.Audio.Song("Beautiful People", "Marylin Manson"));
playlist.songs.push(new Jukebox.Audio.Song("Bismark", "Sabaton"));
playlist.songs.push(new Jukebox.Audio.Song("Smell like teen spirit", "Nirvana"));
playlist.songs.push(new Jukebox.Audio.Song("Do the Evolution", "Pearl Jam"))

for (var x = 0; x < 5; x++) {
    playlist.play();
}
