import React from "react";

const TechIcon: React.FC<{
  title: string;
  component: any;
  stylingClass: any;
}> = ({ title, component, stylingClass }) => {
  return (
    <div className={stylingClass}>
      {title !== "x" && <h4>{title}</h4>}
      <i>{component}</i>
    </div>
  );
};

export default TechIcon;
