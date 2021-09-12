import React, { useState, useEffect, Fragment } from "react";
import audio1 from "../../../audio/lamina_1.mp3";
import audio2 from "../../../audio/lamina_2.mp3";

const allAudios = [audio1, audio2];

const useMultiAudio = (urls) => {
  const [sources, setSources] = useState(
    urls.map((url) => {
      return {
        url,
        audio: new Audio(url),
      };
    })
  );

  const [players, setPlayers] = useState(
    urls.map((url) => {
      return {
        url,
        playing: false,
      };
    })
  );

  const toggle = (targetIndex) => () => {
    const newPlayers = [...players];
    const currentIndex = players.findIndex((p) => p.playing === true);
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false;
      newPlayers[targetIndex].playing = true;
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false;
    } else {
      newPlayers[targetIndex].playing = true;
    }
    setPlayers(newPlayers);
    
  };

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause();
    });
  }, [sources, players]);

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);

  return [players, toggle, sources];
};
export const AudioPlay = ({ url }) => {
  const [players, toggle] = useMultiAudio(allAudios);
  return (
    <Fragment>
      {players.map((player, i) => (
      i === url - 1 ? <button onClick={toggle(i)}>{player.playing ? "Pause" : "Play"}</button>
: null   
))}
    </Fragment>
  );
};
