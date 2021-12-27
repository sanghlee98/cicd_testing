import React from "react";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "73%",
        textAlign: "center",
        borderBottom: "2px solid #aaa",
        lineHeight: "0.1em",
        margin: "75px 0 35px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 30px", fontSize: "30px", fontFamily: "Trebuchet MS" }}>{text}</span>
    </div>
  );
};

export default HorizonLine;