import React from "react";
import ComponentStyling from "../style/FullViewContainer.module.css";

const FullViewContainer = ({ children, style }) => {
  return (
    <section className={ComponentStyling.container} style={style}>
      {children}
    </section>
  );
};

export default FullViewContainer;
