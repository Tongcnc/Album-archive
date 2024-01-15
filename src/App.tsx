import "./App.css";
import Album from "./components/Album";
import TempleFairCover from "./assets/album-TempleFair.jpg";
import TempleFairVinyl from "./assets/album-TempleFair-3.png";
import ManchildCover from "./assets/album-Manchild.jpg";
import ManchildVinyl from "./assets/album-Manchild-4.png";
import BangkokBalterCover from "./assets/album-BangkokBalter.png";
import BangkokBalterVinyl from "./assets/album-BangkokBalter-3.png";
import { TempleFair } from "./db/db";
import { BangkokBalter } from "./db/db";
import { Manchild } from "./db/db";

function App() {
  return (
    <div className="container">
      <Album
        title="Manchild"
        pic={ManchildCover}
        vinylPic={ManchildVinyl}
        colorTheme="#fbe379"
        allSong={Manchild}
        linkSpotify="https://open.spotify.com/album/5el3aDTuvl62pS9F48c55u?si=uq94fWgsQzW_R0vjbq4H-Q"
      />
      <Album
        title="Bangkok Balter Club"
        pic={BangkokBalterCover}
        vinylPic={BangkokBalterVinyl}
        colorTheme="#63baba"
        allSong={BangkokBalter}
        linkSpotify="https://open.spotify.com/album/1kOnJIy8dBSqjA7YWYleeh?si=XYnCZCC7Qj6PFKN8STQzJQ"
      />
      <Album
        title="Greng Jai Piece"
        pic={TempleFairCover}
        vinylPic={TempleFairVinyl}
        colorTheme="rgb(200,55,50)"
        allSong={TempleFair}
        linkSpotify="https://open.spotify.com/album/1I9TAJhnJucoNfu2KX8Hcg?si=SvVzZZcfSvSs12dvM6shzw"
      />
    </div>
  );
}

export default App;
