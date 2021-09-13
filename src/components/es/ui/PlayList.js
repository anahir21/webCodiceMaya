import { createContext, useContext, useState, useEffect } from "react";
import audio1 from "../../../audio/lamina_1.mp3";
import audio2 from "../../../audio/lamina_2.mp3";

const allAudios = [audio1, audio2];

const EmitterContext = createContext({
    songs: allAudios.map((url) => {
        return {
          url,
          audio: new Audio(url),
          playing: false,
        };
      })
  });

  export const AudioEmmiter = ({ children }) => {

    const [players, setPlayers] = useState(
        allAudios.map((url) => {
          return {
            url,
            playing: false,
          };
        })
      );
    /* const [data, setData] = useState();
    const [title, setTitle] = useState();
    const [sound, setSound] = useState();
  
    const setDataEvent = (data, title, sound) => {
      setData(data);
      setTitle(title);
      setSound(sound);
    };
  
    const value = { data, title, sound, setDataEvent }; */

    return (
      <EmitterContext.Provider value={{audios: useState.songs}}>{children}</EmitterContext.Provider>
    );
  }
  
