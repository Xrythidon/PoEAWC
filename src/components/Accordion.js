import React, { useState, useRef, useEffect } from "react";
import Chevron from "./Chevron";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const [rotate, setRotate] = useState("accordion__icon");
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : "0px";
    setRotate(active ? "accordion__icon" : "accordion__icon rotate");
  }, [active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={rotate} width={10} fill={"#777"} />
      </button>
      <div ref={contentRef} className="accordion__content">
        {props.children}
      </div>
    </div>
  );
}

export { Accordion as default };
