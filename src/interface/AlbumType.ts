interface AlbumType {
  title: string;
  pic: string;
  vinylPic: string;
  colorTheme: string;
  allSong: allSong[];
  linkSpotify: string;
}

interface allSong {
  lyric: string;
  song: string;
}

export default AlbumType;
