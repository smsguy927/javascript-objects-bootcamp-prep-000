var playlist = {
  artist: 'songTitle'
};

function updatePlaylist(list, name, title) {
  list[name] = title;
  return list;
}

function removeFromPlaylist(list, artist) {
  delete list.artist;
  return list;
}
