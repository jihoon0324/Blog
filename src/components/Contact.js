import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-me.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y8dgo6a",
        "template_eflgbx9",
        form.current,
        "7DXLzj4fgU4tEmG1M"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="name" name="name" />

                <input
                  hidden
                  type="email"
                  name="user_email"
                  value="jihoon0324@hotmail.com"
                />
                <label>Email</label>
                <input type="text" name="email_from" />
                <labe> phone</labe>
                <input type="phone" name="phone" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
