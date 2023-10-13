import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default ({}) => {
  return (
    <div
      style={{
        height: "476px",
        width: "1240px",
        // backgroundColor: "yellow",
        marginTop: "5rem",
      }}
    >
      <h1>About Us</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "502px",
            height: "394px",
            backgroundColor: "rgba(147, 111, 1, 0.50)",
          }}
        >
          <img
            src={require("../asset/Doctor.png")}
            alt="Photo"
            style={{
              height: "319px",
              width: "578px",
              marginTop: "2.5rem",
              marginLeft: "2rem",
            }}
          />
        </div>

        <div style={{ height: "394px", width: "502px" }}>
          <h4 style={{ color: "#936F01" }}>
            About Doctor Avantika Krishna Killa
          </h4>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 400,
              marginTop: "2rem",
              paddingLeft: "2rem",
              textAlign: "left",
            }}
          >
            A qualified Naturopathy and Yoga Physician, who takes an integrative
            medical approach to health. Having 10+ years of experience in
            integrative health, she firmly believes that balance is the key to
            good health and that abiding to the principles of Mother Nature, one
            can reverse chronic diseases we encounter nowadays. She has been
            working extensively in the managing some of the chronic lifestyle
            related conditions like Diabetes, Asthma, Autoimmune diseases,
            Sciatica, PCOS, Infertility, Obesity, Thyroid, Dyslipidemia and
            more. She has had the opportunity to work with some great
            Naturopaths, Doctors and Hospitals like the All India Institute of
            Medical Sciences (AIIMS), New Delhi. She is also a trained
            Acupuncturist and Chiropractor.
          </p>
          <Button
            style={{
              display: "flex",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "5.451px",
              border: "2px solid rgba(147, 111, 1, 0.81)",
              fontWeight: "500",
              fontSize: "12px",
              color: "rgba(147, 111, 1, 0.81)",
              marginLeft: "15rem",
              marginTop: "4rem",
            }}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};
