import React, {useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from 'react-spring'
import logo from '../../../images/logo.png'
import { AiOutlineClose as Close } from "react-icons/ai";
import './modal.css'
import video from '../../../images/home/planet-venus-in-space-with-stars.mp4'

export const Modal = ({ showModal, setShowModal }) => {
  showModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

    const modalRef = useRef()
    const animation = useSpring({
        config: { 
            duration: 250
        },
        opacity: showModal ? 1: 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    })

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

  return showModal ? (
    <div className="modal-video">
    <animated.div style={animation} className="div-animated" ref={modalRef} onClick={closeModal}>    
      <div className="back-modal">
     <img alt="logo" src = {logo} className="logo-modal"></img>
      <button
        className="btn-close waves-effect"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <Close />
      </button>
        <div className="container-video">
          <iframe
            width="560"
            height="315"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </animated.div> 
    </div>
  ) : null;
};
