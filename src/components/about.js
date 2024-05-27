import React, { useEffect } from "react";
import "../styles/about.css";

function About() {
  useEffect(() => {
    const typing_animation = document.querySelector("#text");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hidden = document.querySelectorAll(".hidden");
    hidden.forEach((el) => observer.observe(el));

    return () => {
      hidden.forEach((el) => observer.unobserve(el));
    };
  }, []);
  useEffect(() => {
    const typing_animation = document.querySelector("#text");
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show1");
          typing_animation.textContent = "";
        } else {
          entry.target.classList.remove("show1");
        }
      });
    });

    const hidden1 = document.querySelectorAll(".hidden1");
    hidden1.forEach((el) => observer1.observe(el));

    return () => {
      hidden1.forEach((el) => observer1.unobserve(el));
    };
  }, []);
  return (
    <section id="about" className="resume_sec">
      <p className="small_text">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="picture_container hidden1">
          <img
            src="./hello_world.png"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="flexboxes_containers">
          <div className="text-container hidden1">
            <p className="about_me_text">
              From chasing A+'s to mastering C++, I've discovered that life's
              best achievements come from embracing challenges and pushing
              boundaries. <br></br> <br></br>
              Hello! I'm Kenny Thai, an aspiring software engineer eager to
              leverage my programming experience towards real-world impact.
              Beyond coding, you'll find me delving in games, binging some
              shows, lost in music, or diving into swimming pools. <br></br>{" "}
              <br></br>I love connecting with new individuals, so feel to
              connect with me through my email or LinkedIn!
            </p>
          </div>
          <div className="flexbox_containers">
            <div className="flexboxes_content hidden1">
              <h1 className="quickpad">Work Experience</h1>
              <div className="detaildisplay">
                <img
                  src="/ucrlogo.png"
                  alt="Experience icon"
                  className="school"
                />
                <div className="resumedisplay">
                  <p>
                    <strong>Location:</strong> University of California,
                    Riverside
                  </p>
                  <p>
                    <strong>Role:</strong> Software Development Intern
                  </p>
                  <p>
                    <strong>From:</strong> June 2023 - Present
                  </p>
                </div>
              </div>
              <div className="detaildisplay">
                <img
                  src="/ucrlogo.png"
                  alt="Experience icon"
                  className="school"
                />
                <div className="resumedisplay">
                  <p>
                    <strong>Location:</strong> University of California,
                    Riverside
                  </p>
                  <p>
                    <strong>Role:</strong> CS141 Grader
                  </p>
                  <p>
                    <strong>From:</strong> March 2024 - Present
                  </p>
                </div>
              </div>
            </div>
            <div className="flexboxes_content hidden1">
              <h1 className="quickpad">Education</h1>
              <div className="detaildisplay">
                <img src="/ucr.png" alt="Experience icon" className="school" />
                <div className="resumedisplay">
                  <p>
                    <strong>School:</strong> University of California, Riverside
                  </p>
                  <p>
                    <strong>Degree:</strong> Computer Science B.S.
                  </p>
                  <p>
                    <strong>From:</strong> Sept. 2021 - June 2025
                  </p>
                  <p>
                    <strong>GPA:</strong> 3.93
                  </p>
                </div>
              </div>
              <div className="detaildisplay">
                <img
                  src="/ggusd.png"
                  alt="Experience icon"
                  className="school"
                />
                <div className="resumedisplay">
                  <p>
                    <strong>Location:</strong> Bolsa Grande High School
                  </p>
                  <p>
                    <strong>Degree:</strong> High School Diploma
                  </p>
                  <p>
                    <strong>From:</strong> Aug. 2017 - June 2021
                  </p>
                  <p>
                    <strong>GPA:</strong> 4.23
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
  );
}

export default About;
