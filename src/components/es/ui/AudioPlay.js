import React, { useState, useEffect, Fragment } from "react";
import audio1 from '../../../audio/lamina_1.mp3'
import audio2 from '../../../audio/lamina_2.mp3'

export const AudioPlay = ({url}) => {
  console.log(url)
  const useAudio = (sound) => {
    const [audio] = useState(new Audio(sound));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(
    url === 'lamina1' ? audio1 : url === 'lamina2' ? audio2 : null
    );

  return (
    <Fragment>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </Fragment>
  );
};
