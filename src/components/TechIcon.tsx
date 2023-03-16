import React from "react";

const TechIcon: React.FC<{ title: string; component: any }> = ({
  title,
  component,
}) => {
  return (
    <div className="technology">
      <h4>{title}</h4>
      <i>{component}</i>
    </div>
  );
};

export default TechIcon;
