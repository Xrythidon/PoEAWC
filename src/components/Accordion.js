import React, { useState, useRef, useEffect } from "react";
import Chevron from "./Chevron";
import { Badge, Chip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  customBadge: {
    backgroundColor: "#00AFD7",
    color: "white"
  }
});

function Accordion(props) {
  const { classes } = props;
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
        <div className="accordion__spaced ">
          <p className="accordion__title">{props.title}</p>
          <p className="accordion__subtitle">{props.subTitle}</p>
          {props.tags.map(tag => (
            <div key={tag} className="accordion__spaced">
              <Chip color="primary" variant="default" label={tag} size="small"/>
            </div>
          ))}
        </div>
        <Chevron className={rotate} width={10} fill={"#777"} />
      </button>
      <div ref={contentRef} className="accordion__content">
        {props.children}
      </div>
    </div>
  );
}

export { Accordion as default };
