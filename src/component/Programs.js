import React, { Component } from "react";

export default ({ image, imageUrl, title }) => {
  return (
    <div
      style={{
        height: "152px",
        width: "162px",
        backgroundColor: "#936F01",
        marginTop: "2rem",
        transform: "rotateZ(45deg)",
      }}
    >
      <img
        src={imageUrl}
        alt="Photo"
        style={{
          height: "47px",
          width: "42px",
          marginTop: "3rem",

          transform: "rotateZ(-45deg)",
        }}
      />
      <p
        style={{
          color: "white",
          transform: "rotateZ(-45deg)",
          marginTop: "1rem",

          // marginRight: "-7rem",
          marginLeft: "4rem",
        }}
      >
        {title}
      </p>
    </div>
  );
};
