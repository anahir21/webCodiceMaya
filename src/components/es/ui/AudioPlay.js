import React, { useContext } from 'react'
import { AudioContext } from '../context/AudioContext';
import {CgPlayButtonO, CgPlayPauseO } from 'react-icons/cg'

import './ui.css'

const AudioPlay = (url) => {
  const { players, setPlayers } = useContext(AudioContext);

  const toggle = index => () => {
    const targetIndex = parseInt(index.url) -1;
    const newPlayers = [...players];
    const currentIndex = players.findIndex(p => p.playing === true);
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

  return (
    <button onClick={toggle(url)} className="listen"> Escuchar {players[parseInt(url.url) -1].playing ? <CgPlayPauseO />  : <CgPlayButtonO />} </button>
  );
};

export default AudioPlay
