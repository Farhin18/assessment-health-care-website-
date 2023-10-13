import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default ({ Home }) => {
  //   let navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: 175,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p>Home</p>
      <p>About Us</p>
      <p>Our Healing Center</p>
      <p>Healing Stories</p>

      <img
        src={require("../asset/logo.png")}
        alt="Photo"
        style={{
          height: "114px",
          width: "258px",
        }}
      />
      <p>Program</p>
      <p>News & Media</p>
      <p>Online Programs</p>

      <Button
        style={{
          display: "flex",
          padding: "18px",
          "43px": "19px",
          backgroundColor: "#936F01",
          borderRadius: "5.451px",
          border: "2px solid #5C8692",
          fontWeight: "500",
          fontSize: "12px",
        }}
      >
        Book Appointment
      </Button>
    </div>
  );
};
