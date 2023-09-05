import React from "react";

const Paragraph = ({ children, className }) => {
  const paraStyle = {
    font: " normal normal 18px/26px Rubik",
    letterSpacing: "0px",
    color: "#1D2226",
    opacity: " 0.6",
    marginBottom: "20px",
    fontWeight: "400",
  };
  return (
    <>
      <h1 style={paraStyle} className={className}>
        {children}
      </h1>
    </>
  );
};

export default Paragraph;
