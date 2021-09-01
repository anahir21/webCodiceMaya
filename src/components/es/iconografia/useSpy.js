import { useRef, useState, useEffect } from "react";

let OBSERVER = null;
let SUBSCRIBERS = new Map();

const buildThresholdList = () => {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
};

let options = {
  rootMargin: "10px 0px 30px 0px",
  threshold: buildThresholdList()
};
const THRESHOLD_TRIGGER = 0.5;

let callback = (entries) => {
  entries.forEach((entry) => {
    const listener = SUBSCRIBERS.get(entry.target);
    if (listener) {
      const ratio = entry.intersectionRatio;
      listener(ratio > THRESHOLD_TRIGGER, ratio);
    }
  });
};

const getObserver = () => {
  if (OBSERVER) {
    return OBSERVER;
  }

  OBSERVER = new IntersectionObserver(callback, options);
  return OBSERVER;
};

const UseSpy = () => {
  const itemRef = useRef(null);
  const [{ isVisible, ratio }, setState] = useState({
    isVisible: false,
    ratio: 0
  });

  useEffect(() => {
    const observer = getObserver();
    const element = itemRef.current;

    if (!element) return;

    observer.observe(element);

    SUBSCRIBERS.set(element, (visible, ratio) => {
      //if (visible !== isVisible) {
      setState({ isVisible: visible, ratio: ratio });
      //setIsVisible(visible);
      // }
    });

    // cleanup
    return () => {
      observer.unobserve(element);
    };
  }, [itemRef, isVisible]);

  return { itemRef, isVisible, ratio };
};

export default UseSpy;
