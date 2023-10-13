import React, { Component } from "react";
import TopBar from "./TopBar";
import { Button } from "react-bootstrap";
import Types from "./Types";
import About from "./About";
import Elements from "./Elements";
import Programs from "./Programs";

export default ({ image }) => {
  const [formStatus, setFormStatus] = React.useState("Book Appointment");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
    };
    console.log(conFom);
  };
  return (
    <div style={{ width: "1440px", height: "6360px" }}>
      <TopBar />
      <img
        src={require("../asset/bg.png")}
        alt="Photo"
        style={{
          height: "645px",
          width: "1440px",
        }}
      />
      <div
        className="bg-light d-flex justify-content-around"
        style={{ width: "95%" }}
      >
        <Types
          image={require("../asset/img1.png")}
          alt="Photo"
          title="AHAAR"
          subTitle="Food – It is not about eating less or counting your calories but eating the right kind of food at the right time in a right way. Diet is considered to be one of the Upastambha of life and the greatest medicine. It has a prime role in maintaining health and treating various diseases"
        />
        <Types
          image={require("../asset/img2.png")}
          alt="Photo"
          title="VIHAAR"
          subTitle="Exercise – Regular exercise is known to improve circulation, strength, and endurance. It helps you to relax mentally and have a sound sleep. It also improves digestion and elimination."
        />
        <Types
          image={require("../asset/img3.png")}
          alt="Photo"
          title="NIDRA"
          subTitle="Sleep – It is not about sleeping for 8 hours but about how well you are sleeping, which is possible only when the mind completely dissociates itself from the senses. Quality sleep recharges the mind, repairs the body and nourishes the soul."
        />
        <Types
          image={require("../asset/img4.png")}
          alt="Photo"
          title="DHYANA"
          subTitle="Mindfulness - Yoga comprises of several practices, of which Dhyana means pure meditation to keep the mind at peace and stress free. Stress increases the risk of conditions like obesity, heart disease, diabetes, depression, gastrointestinal problems, and asthma."
        />
      </div>
      <About />
      <h4 style={{ fontWeight: 600, fontSize: "33px", margin: "3rem" }}>
        Why Choose Us
      </h4>
      <div
        style={{
          backgroundColor: "rgba(147, 111, 1, 0.90)",
          height: "440px",
          width: "100%",
          paddingTop: "4rem",
          display: "flex",
        }}
      >
        <Elements
          image={require("../asset/medicine.png")}
          alt="Photo"
          title="No medicines or supplements used"
          subTitle="Our approach is purely based on an individual’s lifestyle and the connection between Mind-Body-Soul. It is drugless, safe and effective"
        />

        <Elements
          image={require("../asset/evidence.png")}
          alt="Photo"
          title="Evidenced Based Medicine"
          subTitle="Our approach is guided by the best available research data, balanced with the doctor’s judgement and patient’s values."
        />

        <Elements
          image={require("../asset/programs.png")}
          alt="Photo"
          title="Individualized programs"
          subTitle="Each one of us being different with regards to the body type, mindset, likes and dislikes, our programs are designed to meet individual requirements and goals. Not just weight loss, but we believe in overall health, managing the chronic diseases and restoring the factor of wellness."
        />

        <Elements
          image={require("../asset/virtual.png")}
          alt="Photo"
          title="Virtual programs"
          subTitle="We have something for all those living far away or running a busy life. All you need to do is book an appointment with our doctors and we shall reach back to you as soon as we can with our online program details and help you deal with it over an audio/video call."
        />
      </div>
      <h1 style={{ marginTop: "4rem" }}>Our Healing Center</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          style={{
            height: "443px",
            width: "357px",
            marginTop: "2rem",
            marginLeft: "-10rem",
            borderRadius: "10px",
            backgroundColor: "rgba(147, 111, 1, 0.50)",
          }}
        >
          <img
            src={require("../asset/Relieve.png")}
            alt="Photo"
            style={{
              height: "311px",
              width: "289px",
              marginTop: "2rem",
            }}
          />
          <h4 style={{ color: "white", marginTop: "2rem" }}>
            Relieve Ache & pains
          </h4>
        </div>
        <div
          style={{
            height: "401px",
            width: "323px",
            marginTop: "3.5rem",
            borderRadius: "10px",
            backgroundColor: "rgba(147, 111, 1, 0.50)",
          }}
        >
          <img
            src={require("../asset/Healing.png")}
            alt="Photo"
            style={{
              height: "282px",
              width: "262px",
              marginTop: "2rem",
            }}
          />
          <h4 style={{ color: "white", marginTop: "2rem" }}>
            Healing & Strengthening
          </h4>
        </div>
        <div
          style={{
            height: "401px",
            width: "323px",
            marginTop: "3.5rem",
            borderRadius: "10px",
            backgroundColor: "rgba(147, 111, 1, 0.50)",
          }}
        >
          <img
            src={require("../asset/Ayurveda.png")}
            alt="Photo"
            style={{
              height: "282px",
              width: "262px",
              marginTop: "2rem",
            }}
          />
          <h4 style={{ color: "white", marginTop: "2rem" }}>Ayurveda Spa</h4>
        </div>
      </div>
      <h1 style={{ margin: "3rem" }}>Our Programs</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "-5rem",
        }}
      >
        <Programs
          imageUrl={require("../asset/Group.png")}
          alt="Photo"
          title="Weight management"
        />

        <Programs
          imageUrl={require("../asset/Group1.png")}
          alt="Photo"
          title="Diabetes management"
        />

        <Programs
          imageUrl={require("../asset/Group2.png")}
          alt="Photo"
          title="Cardiac Care"
        />

        <Programs
          imageUrl={require("../asset/Group3.png")}
          alt="Photo"
          title="Pain management"
        />

        <Programs
          imageUrl={require("../asset/Group4.png")}
          alt="Photo"
          title="Hormonal Care"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "-5rem",
        }}
      >
        <Programs
          imageUrl={require("../asset/Group5.png")}
          alt="Photo"
          title="Skin Care"
        />

        <Programs
          imageUrl={require("../asset/Group6.png")}
          alt="Photo"
          title="Allergy Care"
        />

        <Programs
          imageUrl={require("../asset/Group7.png")}
          alt="Photo"
          title="Pregnancy Care"
        />

        <Programs
          imageUrl={require("../asset/Group8.png")}
          alt="Photo"
          title="Stress Management"
        />

        <Programs
          imageUrl={require("../asset/Group9.png")}
          alt="Photo"
          title="Detoxification"
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "559px",
          backgroundColor: "#F2EEE1",
          marginTop: "4rem",
        }}
      >
        <h1 style={{ paddingTop: "2rem" }}>Healing Stories</h1>
        <div
          style={{
            width: "874px",
            height: "263px",
            backgroundColor: "white",
            display: "inline-flex",
            justifyContent: "center",
            marginTop: "5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 4px 0px rgba(0, 0, 0, .25)",
          }}
        >
          <p
            style={{
              width: "649px",
              height: "138px",
              display: "flex",
              alignItems: "center",
              marginTop: "4rem",
            }}
          >
            “I have Diabetes for the last 20 years for which I have been taking
            up to 20 units of insulin everyday along with other regular
            medicines to control my sugar level. One of my relatives informed me
            about Panchatattva and I planned a visit. Within 2 months of
            following the diet plan, the results were so positive that at
            present I no longer need insulin shots and my other medicines have
            also been reduced to half. I’m grateful to the entire team.”
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <img
            src={require("../asset/Ellipse4.png")}
            alt="Photo"
            style={{
              height: "42px",
              width: "42px",
              marginRight: "2rem",
            }}
          />

          <img
            src={require("../asset/Ellipse2.png")}
            alt="Photo"
            style={{
              height: "42px",
              width: "42px",
              marginRight: "2rem",
            }}
          />

          <img
            src={require("../asset/Ellipse1.png")}
            alt="Photo"
            style={{
              height: "73px",
              width: "73px",
              marginRight: "2rem",
            }}
          />

          <img
            src={require("../asset/Ellipse3.png")}
            alt="Photo"
            style={{
              height: "42px",
              width: "42px",
              marginRight: "2rem",
            }}
          />
        </div>
        <h1 style={{ color: "#936F01", fontSize: "15px" }}>
          Rajesh Goenka (Business)
        </h1>
      </div>
      <h1 style={{ marginTop: "5rem", marginBottom: "2rem" }}>
        Book Appointment
      </h1>
      <div
        style={{
          width: "1171px",
          height: "682px",
          borderRadius: "10px",
          marginLeft: "3.5rem",
          backgroundColor: "rgba(147, 111, 1, 0.90)",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            height: "603px",
            width: "437px",
            paddingTop: "2rem",
            marginLeft: "4rem",
          }}
        >
          <img
            src={require("../asset/Logo2.png")}
            alt="Photo"
            style={{
              height: "188px",
              width: "437px",
            }}
          />
          <div
            style={{
              color: "white",
              marginTop: "10rem",
              textAlign: "start",
            }}
          >
            <i class="fa fa-phone" aria-hidden="true"></i>
            <p>+91 8178546612</p>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <p>info@panchatattva</p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>Panchatattva, C-175, Sector 100, Noida, Uttar Pradesh-201303</p>
          </div>
        </div>
        <div
          style={{
            width: "550px",
            height: "603px",
            marginTop: "3rem",
            borderRadius: "10px",
            background: "#fff",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <form onSubmit={onSubmit}>
            <div style={{ width: "95%" }}>
              <input
                className="form-control m-3"
                type="text"
                id="name"
                placeholder="Enter Full Name"
                required
                style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
              />
              <input
                className="form-control m-3"
                type="text"
                id="email"
                placeholder="Email"
                required
                style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
              />
              <input
                className="form-control m-3"
                type="text"
                id="number"
                placeholder="Phone Number"
                required
                style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
              />
            </div>
            <div>
              <div style={{ display: "flex", marginTop: "-1rem" }}>
                <input
                  className="form-control m-3"
                  type="text"
                  id="name"
                  placeholder="Gender*"
                  required
                  style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
                />
                <input
                  className="form-control m-3"
                  type="text"
                  id="number"
                  placeholder="Age*"
                  required
                  style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
                />
              </div>
              <div style={{ display: "flex", marginTop: "-1rem" }}>
                <input
                  className="form-control m-3"
                  type="text"
                  id="name"
                  placeholder="City*"
                  required
                  style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
                />
                <input
                  className="form-control m-3"
                  type="text"
                  id="name"
                  placeholder="Country*"
                  required
                  style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
                />
              </div>
              <div style={{ display: "flex", marginTop: "-1rem" }}>
                <input
                  className="form-control m-3"
                  type="text"
                  id="name"
                  placeholder="Type Of Appointment"
                  required
                  style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
                />
                <input
                  className="form-control m-3"
                  type="text"
                  id="name"
                  placeholder="Date & Time*"
                  required
                  style={{ border: "1px solid rgba(147, 111, 1, 0.65)" }}
                />
              </div>
            </div>
            <div
              style={{
                width: "198px",
                height: "76px",
                border: "1px solid rgba(147, 111, 1, 0.61)",
                borderRadius: "8px",
                marginLeft: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <p style={{ marginTop: "1rem", marginRight: "2rem" }}>
                  In Person
                </p>
                <input
                  type="checkbox"
                  id="select"
                  name="appointment"
                  value="type"
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <p style={{ marginTop: "-1rem", marginRight: "2rem" }}>
                  Virtual
                </p>
                <input
                  style={{ marginTop: "-2rem", marginRight: "-1rem" }}
                  type="checkbox"
                  id="select"
                  name="appointment"
                  value="type"
                ></input>
              </div>
            </div>

            <textarea
              id="subject"
              name="subject"
              placeholder="Describe Health Issue"
              style={{
                height: "75px",
                width: "95%",
                border: "1px solid rgba(147, 111, 1, 0.65)",
                borderRadius: "8px",
                marginTop: "1rem",
                marginBottom: "-2rem",
              }}
            ></textarea>
            <button
              className="btn rounded-3 text-white mt-5"
              type="submit"
              style={{
                width: "90%",
                background: "#936F01",
              }}
            >
              {formStatus}
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "564px",
          background: "rgba(242, 238, 225, 0.49)",
          border: "1px solid #936F01",
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginTop: "2rem" }}>Review & Testimonials</h1>
        <div
          style={{
            width: "705px",
            height: "284px",
            // padding: "33px",
            marginTop: "5rem",
            borderRadius: "11px",
            // display: "flex",
            background:
              "linear-gradient(180deg, #936F01 -11.76%, rgba(147, 111, 1, 0.00) 173.52%)",
            boxShadow:
              "27.55329px 19.2873px 55.10658px 0px rgba(0, 0, 0, 0.08)",
          }}
        >
          <img
            src={require("../asset/Elisa.png")}
            alt="Photo"
            style={{
              height: "344px",
              width: "220px",
              marginLeft: "-25rem",
              marginTop: "-4rem",
            }}
          />
          <div style={{ width: "287px", height: "246px", marginLeft: "22rem" }}>
            <div
              style={{
                marginTop: "-18rem",
                // marginLeft: "2rem",
                color: "white",
                display: "flex",
              }}
            >
              <img
                src={require("../asset/Star.png")}
                alt="Photo"
                style={{
                  height: "19px",
                  width: "19px",
                }}
              />
              <img
                src={require("../asset/Star.png")}
                alt="Photo"
                style={{
                  height: "19px",
                  width: "19px",
                }}
              />
              <img
                src={require("../asset/Star.png")}
                alt="Photo"
                style={{
                  height: "19px",
                  width: "19px",
                }}
              />
              <img
                src={require("../asset/Star.png")}
                alt="Photo"
                style={{
                  height: "19px",
                  width: "19px",
                }}
              />
              <p style={{ marginLeft: "1rem" }}>4 rating</p>
            </div>
            <p style={{ color: "white", textAlign: "start", fontSize: 20 }}>
              I recently visited the Ayurvedic Clinic and had a wonderful
              experience. The staff was friendly and welcoming, creating a warm
              and calming atmosphere.{" "}
            </p>
            <h4 style={{ marginLeft: "-12rem", marginTop: "-1rem" }}>
              Elisa Grant
            </h4>
            <p style={{ marginLeft: "-8rem", marginTop: "-0.5rem" }}>
              Legacy Solution Engineer
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "778px",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 5.13%, rgba(147, 111, 1, 0.11) 98.18%)",
        }}
      >
        <img
          src={require("../asset/logo.png")}
          alt="Photo"
          style={{
            height: "148px",
            width: "359px",
            marginTop: "9rem",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <div
            style={{
              color: "#936F01",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <p>Home</p>
            <p>About Us</p>
            <p>Our Healing Center</p>
            <p>Healing Stories</p>
            <p>News & Media</p>
            <p>Programs</p>
            <p>Online Programs</p>
          </div>
          <img
            src={require("../asset/Map.png")}
            alt="Photo"
            style={{
              height: "275px",
              width: "426px",
              // marginTop: "5rem",
            }}
          />
          <div
            style={{
              color: "#936F01",
              textAlign: "center",
              padding: "2rem",
              marginTop: "5rem",
            }}
          >
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Copyright Policy</p>
            <p>Disclaimer</p>
          </div>
        </div>
        <div
          style={{
            color: "#936F01",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={require("../asset/tele.png")}
              alt="Photo"
              style={{
                height: "19px",
                width: "19px",
              }}
            />
            <p>+91 8178546612</p>
          </div>
          <div style={{ display: "flex" }}>
            <img
              src={require("../asset/mail.png")}
              alt="Photo"
              style={{
                height: "19px",
                width: "19px",
              }}
            />
            <p>info@panchatattva.in</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-2rem" }}>
            <img
              src={require("../asset/location.png")}
              alt="Photo"
              style={{
                height: "19px",
                width: "19px",
              }}
            />
            <p>Panchatattva,C-175, Sector 100, Noida, Uttar Pradesh-201303</p>
          </div>
        </div>
      </div>
      <footer style={{ color: "rgba(109, 109, 109, 0.50)" }}>
        © 2023 Panchatattva Naturopathy Clinic, All Right Reserved
      </footer>
    </div>
  );
};
