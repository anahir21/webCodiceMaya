import React from "react";
import { useHistory } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import "./ButtonMore.css";

export const ButtonMore = ({path}) => {
  let history = useHistory();

  function handlePath(path) {
    history.push(path);
  }

  return (
    <button className="button__ver_mas" onClick={()=>handlePath(path)}>
      Ver más <RiArrowDropRightLine />
    </button>
  );
};
