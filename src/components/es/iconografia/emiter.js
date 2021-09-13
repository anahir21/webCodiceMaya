import { createContext, useContext, useState } from "react";

const EmitterContext = createContext({
    data: null,
    title: null,
    sound: null,
    setValue: (value) => {}
  });
  
export const UseEmitter = () => useContext(EmitterContext);
  
 export const Emmiter = ({ children }) => {
    const [data, setData] = useState();
    const [title, setTitle] = useState();
    const [sound, setSound] = useState();
  
    const setDataEvent = (data, title, sound) => {
      setData(data);
      setTitle(title);
      setSound(sound);
    };
  
    const value = { data, title, sound, setDataEvent };
  
    return (
      <EmitterContext.Provider value={value}>{children}</EmitterContext.Provider>
    );
  }
  
