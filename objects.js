var playlist = { 'Kanye': 'Gold Digger', 'Guns and Roses': 'Paradise City'};
function updatePlaylist(playlist, artistName, songTitle)
{ 
  playlist[artistName] = songTitle 
  return playlist
}

delete playlist.Kanye
