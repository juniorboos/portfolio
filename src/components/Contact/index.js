import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/Contact.module.css";
import axios from "axios";
import { useAlert } from "react-alert";
import { Event } from "../../services/analytics";

import facebook from "../../assets/Social/facebook.png";
import github from "../../assets/Social/github.png";
import instagram from "../../assets/Social/instagram.png";
import linkedin from "../../assets/Social/linkedin.png";

const Contact = () => {
  const alert = useAlert();

  const GOOGLE_FORM_EMAIL_ID = "entry.1227060730";
  const GOOGLE_FORM_MESSAGE_ID = "entry.145728746";
  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeuXVWQOLt-9FkzUJG3OTxgAvY32DrCxkHfEMKXGZCUyVBKyg/formResponse";

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const section = useRef(null);
  const container = useRef(null);
  const border = useRef(null);
  const social = useRef(null);

  const socialItems = [
    {
      name: "Facebook",
      image: facebook,
      url: "https://www.facebook.com/junior.boos.42",
    },
    {
      name: "Instagram",
      image: instagram,
      url: "https://www.instagram.com/boos.junior/",
    },
    {
      name: "LinkedIn",
      image: linkedin,
      url: "https://www.linkedin.com/in/milton-boos-junior/",
    },
    {
      name: "Github",
      image: github,
      url: "https://github.com/juniorboos",
    },
  ];

  function sendMessage() {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_MESSAGE_ID, message);
    formData.append(GOOGLE_FORM_EMAIL_ID, email);
    try {
      axios.post(GOOGLE_FORM_ACTION_URL, formData);
    } catch (err) {
      console.log(err);
      return alert.error("Error! Try again!");
    }
    setEmail("");
    setMessage("");
    return alert.success("Message sent!");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "") {
      return alert.error("Empty email!");
    }

    if (message === "") {
      return alert.error("Empty message!");
    }

    sendMessage();
  }

  const handleScroll = () => {
    let sectionY = section.current.getBoundingClientRect();
    let section_height = window.innerHeight;
    const opacity =
      (window.pageYOffset - sectionY.top * 4) / window.pageYOffset;

    container.current.style.opacity = opacity;

    border.current.style.width = `${
      (section_height / (sectionY.top + section_height)) * 20
    }%`;

    const translate = -sectionY.top / 4 + 50;
    if (translate <= 0) {
      social.current.style.transform = `translateX(${translate}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (social) => {
    window.open(social.url, "_blank");
    Event("SOCIAL", "CLICKED", social.name);
  };

  return (
    <section ref={section} className={styles.section}>
      <div className={styles.container} ref={container}>
        <h3 className={styles.title}>
          Contact me
          <div ref={border} className={styles.border}></div>
        </h3>
        <div className={styles.content}>
          <div className={styles.socialContainer} ref={social}>
            {socialItems.map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt=""
                onClick={() => handleClick(item)}
              />
            ))}
          </div>
          <div className={styles.emailContainer}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <h2 className={styles.labelForm}>Email</h2>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
              />
              <h2 className={styles.labelForm}>Message</h2>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.messageInput}
              />
              <button className={styles.button} type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
