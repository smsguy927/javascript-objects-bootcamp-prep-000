var playlist {
  artist: 'songTitle';
};

function updatePlaylist(list, name, title) {
  list[name] = title;
  return list;
}

function removeFromPlaylist(list, name) {
  if(list.hasOwnProperty(name)) {
    delete name;
  }
  return list;
}
