import React, { Component } from "react";

export default ({ image, title, subTitle }) => {
  return (
    <div
      style={{
        width: "310px",
        height: "389px",
        marginTop: "5rem",
        border: "1px solid rgba(147, 111, 1, 0.34)",
        borderRadius: "1rem",
      }}
    >
      <div
        style={{
          height: "135px",
          backgroundColor: "#936F01",
          paddingTop: "2rem",
          //   borderTop: "2px solid #936F01",
        }}
      >
        <img
          src={image}
          alt="Photo"
          style={{
            height: "60px",
            width: "60px",
          }}
        />
        <h4>{title}</h4>
      </div>
      <div
        style={{
          height: "250px",
          marginLeft: "3rem",
        }}
      >
        <p
          style={{
            width: "211px",
            height: "210px",
            fontSize: "14px",
            marginTop: "1rem",
          }}
        >
          {subTitle}
        </p>
        <p
          style={{ marginRight: "3rem", marginTop: "-1rem", color: "#936F01" }}
        >
          Read Less
        </p>
      </div>
    </div>
  );
};
