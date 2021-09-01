import { createContext, useContext, useState } from "react";

const EmitterContext = createContext({
    data: null,
    title: null,
    setValue: (value) => {}
  });
  
  export const UseEmitter = () => useContext(EmitterContext);
  
 export const Emmiter = ({ children }) => {
    const [data, setData] = useState();
    const [title, setTitle] = useState();
  
    const setDataEvent = (data, title) => {
      setData(data);
      setTitle(title)
    };
  
    const value = { data, title, setDataEvent };
  
    return (
      <EmitterContext.Provider value={value}>{children}</EmitterContext.Provider>
    );
  }
  
