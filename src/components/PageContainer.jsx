import React from "react";
import "../styles/components/PageContainer.css";

const PageContainer = ({ children, className }) => {
  return <div className={`container fade ${className}`}>{children}</div>;
};

export default PageContainer;
