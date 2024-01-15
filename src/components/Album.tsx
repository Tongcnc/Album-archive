import AlbumType from "../interface/AlbumType";
import "../App.css";
import { useState } from "react";

function Album(props: AlbumType) {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

  const handleBack = () => {
    setCurrentSongIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) =>
      Math.min(prevIndex + 1, props.allSong.length - 1)
    );
  };

  return (
    <section
      id={props.title}
      className="child h-screen w-screen flex flex-col justify-center items-center transition-colors duration-500 ease-in-out"
      style={{
        backgroundColor: `${props.colorTheme}`,
      }}
    >
      <header className="fixed top-0 flex justify-between w-screen p-6">
        <h1 className="text-3xl font-bold">PHUM VIPHURIT</h1>
        <h1 className="text-3xl font-bold uppercase">Album</h1>
      </header>

      <div className="flex flex-col items-center gap-4 relative w-full">
        <div className="container-vinyl">
          <a href={props.linkSpotify} target="_blank" className="z-10">
            <img src={props.pic} className="cover-vinyl" alt="album image" />
          </a>
          <img src={props.vinylPic} className="vinyl" alt="vinyl image" />
        </div>
        <h1 className="text-[125px] text-white opacity-60 font-bold absolute top-1/2 -translate-y-1/2">
          {props.title}
        </h1>
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <p className="font-Quicksand">
          Listen on{" "}
          <a
            href={props.linkSpotify}
            target="blank"
            className="underline font-Syne uppercase font-bold cursor-pointer"
          >
            here
          </a>
        </p>
      </div>

      {/* Song Lyric */}
      <div className="sticky w-screen overflow-hidden left-0 bottom-20 px-6">
        <div className="flex items-start gap-6 h-[160px] relative">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            onClick={handleBack}
            className="cursor-pointer"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
          </svg>
          {props.allSong.map((item, index) => (
            <div
              key={index}
              style={{ display: index === currentSongIndex ? "block" : "none" }}
            >
              <h3 className="font-bold">lyrics</h3>
              <p className="w-[300px] my-2 font-Quicksand">{item.lyric}</p>
              <p className="font-bold">- & {item.song}</p>
            </div>
          ))}
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            onClick={handleNext}
            className="cursor-pointer absolute top-10"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
          </svg>
        </div>
      </div>

      {/* Footer  */}
      <footer className="fixed bottom-0 flex justify-between items-end w-screen p-6">
        <p>Privacy Policy</p>
        <ul className="underline">
          <a href="#Manchild">
            <li>Manchild</li>
          </a>
          <a href="#Bangkok Balter Club">
            <li>Bangkok Balter Club</li>
          </a>
          <a href="#Greng Jai Piece">
            <li>The Greng Jai Piece</li>
          </a>
        </ul>
      </footer>
    </section>
  );
}

export default Album;
