import React, { useRef, useState } from "react";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import {
  faPhone,
  faLocationDot,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ defaultMessage }) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const [buttonText, setButtonText] = useState("Wyślij");

  const sendEmail = async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("user_name");
    const emailInput = document.getElementById("user_email");
    const phoneInput = document.getElementById("phone_number");
    const messageInput = document.getElementById("message");
    const checkboxInput = document.getElementById("checkbox");
    const btn = document.querySelector(".submit-button");

    try {
      setButtonText("Wysyłanie ...");
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        {
          user_name: nameRef.current.value,
          user_email: emailRef.current.value,
          phone_number: phoneRef.current.value
            ? phoneRef.current.value
            : "(nie podano)",
          message: messageRef.current.value
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log(result.text);
      btn.style.backgroundColor = "#117d11";
      setButtonText("Wysłano pomyślnie !");
      setTimeout(() => {
        btn.style.backgroundColor = "black";
        setButtonText("Wyślij");
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        messageInput.value = "";
        checkboxInput.checked = false;
      }, 4000);
    } catch (error) {
      console.log(error.text);
      btn.style.backgroundColor = "red";
      setButtonText("Coś poszło nie tak");
      setTimeout(() => {
        btn.style.backgroundColor = "black";
        setButtonText("Wyślij");
      }, 4000);
    }
  };

  return (
    <div className="contact-section">
      <h2>Zapraszamy do kontaktu</h2>

      <div className="info-links">
        <div className="link-div">
          <FontAwesomeIcon icon={faPhone} size="3x" />
          <a className="info-link" href="tel:+48664800321">
            +48 509 955 700
          </a>
        </div>

        <div className="link-div">
          <FontAwesomeIcon icon={faLocationDot} size="3x" />
          <a
            className="info-link"
            href="https://maps.app.goo.gl/ce7Rap1P8yuppkU76"
            target="_blank"
          >
            Generała Stanisława Dąbka 65, 37-600 Dąbków
          </a>
        </div>
        <div className="link-div">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <a className="info-link" href="mailto:univers@univers.net.pl">
            univers@univers.net.pl
          </a>
        </div>
      </div>

      <form className="inputs" onSubmit={sendEmail}>
        <div className="input-div">
          <label htmlFor="user_name">Imię</label>
          <input
            id="user_name"
            ref={nameRef}
            type="text"
            name="user_name"
            size="30"
            required
          />
        </div>
        <div className="input-div">
          <label htmlFor="user_email">E-mail</label>
          <input
            id="user_email"
            ref={emailRef}
            type="email"
            name="user_email"
            size="30"
            required
          />
        </div>
        <div className="input-div">
          <label htmlFor="phone_number">telefon</label>
          <input
            id="phone_number"
            ref={phoneRef}
            type="tel"
            name="phone_number"
            size="30"
          />
        </div>

        <label htmlFor="message" className="textarea-label">
          treść wiadomości
          <textarea
            id="message"
            ref={messageRef}
            name="message"
            cols="40"
            rows="10"
            required
            aria-required="true"
            aria-invalid="false"
            defaultValue={defaultMessage ? defaultMessage : ""}
          />
        </label>

        <div className="checkbox-div">
          <input id="checkbox" type="checkbox" name="checkbox" required />
          <label htmlFor="checkbox">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            otrzymania odpowiedzi na przesłane zapytanie.
          </label>
        </div>

        <button type="submit" value="Send" className="submit-button">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Contact;

{
  /* <textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" style="height: 148px;"></textarea> */
}
