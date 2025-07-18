import React from 'react';

const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
  return (
    <div
      className="absolute -z-50 h-58 w-58 rounded-full blur-3xl"
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        background: "radial-gradient(circle, rgba(255,0,0,0.5) 0%, rgba(255,0,0,0) 70%)"
      }}
    ></div>
  );
};

export default BlurCircle;
