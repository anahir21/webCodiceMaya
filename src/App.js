import React, {useState, useEffect} from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

import "./App.css";

import { Home } from "./components/es/home/Home";
import { Codice } from "./components/es/codice/Codice";
import { Estudios } from "./components/es/estudios/Estudios";
import { Presentacion } from "./components/es/presentacion/Presentacion";
import { ProyectoEditorial } from "./components/es/proyecto-editorial/ProyectoEditorial";
import { Descargas } from "./components/es/descargas/Descargas";
import { Creditos } from "./components/es/creditos/Creditos";
import { Brito } from "./components/es/autores/brito.jsx";
import { Carlson } from "./components/es/autores/carlson";
import { Velasquez } from "./components/es/autores/velasquez";
import { Vila } from "./components/es/autores/vila";
import { Orozco} from "./components/es/autores/orozco";
import { Iconografia } from './components/es/iconografia/Iconografia';
import audio1 from './audio/lamina_1.mp3'
import audio2 from './audio/lamina_2.mp3'
import audio3 from './audio/lamina_3.mp3'
import audio4 from './audio/lamina_4.mp3'
import audio5 from './audio/lamina_5.mp3'
import audio6 from './audio/lamina_6.mp3'
import audio7 from './audio/lamina_7.mp3'
import audio8 from './audio/lamina_8.mp3'
import audio9 from './audio/lamina_9.mp3'
import audio10 from './audio/lamina_10.mp3'
import audio11 from './audio/lamina_10-2.mp3'

import { AudioContext }from './components/es/context/AudioContext';
const allAudios = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11];

const playlist = allAudios.map((url) => {
  return {
    url,
    audio: new Audio(url),
  };
})


function App() {

  const [players, setPlayers] = useState(
    playlist.map(url => {
      return {
        url,
        playing: false
      };
    })
  );
  useEffect(() => {
    players.forEach((source, i) => {
      players[i].playing ? source.url.audio.play() : source.url.audio.pause();
    });
  }, [players]);

  useEffect(() => {
    players.forEach((source, i) => {
      source.url.audio.addEventListener("ended", () => {
        const newPlayers = [...players];
        newPlayers[i].playing = false;
        setPlayers(newPlayers);
      });
    });
  
    return () => {
      players.forEach((source, i) => {
        source.url.audio.removeEventListener("ended", () => {
          const newPlayers = [...players];
          newPlayers[i].playing = false;
          setPlayers(newPlayers);
        });
      });
    };
  }, []);


  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, width: "90%" },
    enter: { opacity: 1, width: "100%" },
  });

  return transitions((props, item) => (
    <AudioContext.Provider value={{
      players,
      setPlayers,
    } 
    }>
    <animated.div style={props}>
      <Switch location={item}>
        
        <Route path="/" exact component={Home} ></Route>
      
        <Route path="/presentacion" exact component={Presentacion}></Route>

        <Route path="/codice" component={Codice}></Route>

        <Route path="/estudios" component={Estudios}></Route>

        <Route path="/proyecto-editorial" component={ProyectoEditorial}></Route>

        <Route path="/descargas" component={Descargas}></Route>

        <Route path="/creditos" component={Creditos}></Route>

        <Route path="/baltazar-brito" component={Brito}></Route>
       
        <Route path="/john-carlson" component={Carlson}></Route>
       
        <Route path="/erik-velasquez" component={Velasquez}></Route>
       
        <Route path="/ricardo-vila" component={Vila}></Route>

        <Route path="/esther-orozco" component={Orozco}></Route>

        <Route path="/estudio-iconografico" component={Iconografia}></Route>
      </Switch>
    </animated.div>
    </AudioContext.Provider>
  ));
}

export default App;
