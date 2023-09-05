import React from "react";

const Heading = ({ children, className }) => {
  const headingStyle = {
    font: " normal normal  28px/36px Rubik",
    color: "#1D2226",
    opacity: "1",
    fontWeight: "500",
  };
  return (
    <>
      <h1 style={headingStyle} className={className}>
        {children}
      </h1>
    </>
  );
};

export default Heading;
