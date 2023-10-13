import React, { Component } from "react";

export default ({ image, title, subTitle }) => {
  return (
    <div
      style={{
        width: "320px",
        height: "320px",
        borderRadius: "320px",
        backgroundColor: "white",
      }}
    >
      {/* <div
        style={{
          width: "81px",
          height: "81px",
          borderRadius: "320px",
          border: "2px solid #936F01",
        }}
      > */}
      <img
        src={image}
        alt="Photo"
        style={{
          height: "60px",
          width: "60px",
          marginTop: "2rem",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ fontSize: "15px", color: "#936F01", marginTop: "1rem" }}>
          {title}
        </h4>
        <p
          style={{
            width: "211px",
            height: "210px",
            fontSize: "12px",
            // marginTop: "2rem",
            // paddingLeft: "4rem"
          }}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};
