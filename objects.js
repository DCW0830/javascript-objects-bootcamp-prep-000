var playlist = { 'Kanye': "Gold Digger"};
function updatePlaylist(playlist, artistName, songTitle)
{ 
  playlist[artistName] = songTitle 
  return playlist
}

delete playlist.Kanye
