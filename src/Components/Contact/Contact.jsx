import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme;
  // .state.darkMode;
  const form = useRef();
  const [sendBtnClicked, setSendBtnClicked] = useState(false);
  const [done, setDone] = useState(false);
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_9e6xckj",
        "template_5u7n2ia",
        form.current,
        "PtisV0zO7Rt084vH3"
      )
      .then(
        (result) => {
          setSendBtnClicked(false);
          console.log(result.text);
          setDone(true);
          setTimeout(() => setDone(false), 2000);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <button
            className="button"
            onClick={() => {
              setSendBtnClicked(true);
              sendEmail();
            }}
            disabled={sendBtnClicked && !done}
          >
            Send
          </button>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
