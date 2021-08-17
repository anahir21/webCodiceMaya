import React, { Fragment } from "react";
import { Parallax } from "react-parallax";
import venus from "../../../images/home/venus.jpg";
import "./home.css"


export const Home = () => {
  return (
    <Fragment>
        
        <Parallax bgImage = {venus} strength = {200}>
            <div className = "parallax-container">
                <div className = "text-parallax">
                    <h1 className="header__codice">
                        Códice Maya
                    <br />
                        de México
                    </h1>
                    <h3 className="header__almanaque">El Almanaque de Venus</h3>
                </div>
                

            </div>
        </Parallax>
        <div className = "example"></div>
    </Fragment>
  );
};
