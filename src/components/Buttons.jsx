import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Buttons = ({ path, className, children }) => {
  const homebtn = {
    height: "46px",
    fontWeight: "500",
    width: "105%",
    position: "relative",
    right: "3%",
  };
  const link = {
    height: "46px",
    width: "100%",
    fontWeight: "500",
    opacity: " 1",
    borderRadius: "6px",
    letterSpacing: "0px",
    font: "normal normal 16px/17px Rubik",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="red">
      <Button style={homebtn}>
        <Link to={path} style={link} className={className}>
          {children}
        </Link>
      </Button>
    </div>
  );
};

export default Buttons;
