import React from "react";
import "./contact_page.scss";
import Contact from "../../components/Contact/Contact";
import { useLocation } from "react-router-dom";
const ContactPage = () => {
  const location = useLocation();
  const busName = location.state;
  const defaultMessage =
    "Witam," +
    "\r\n" +
    "\r\n" +
    "Jestem zainteresowany/a wynajmem " +
    busName +
    ".";
  return (
    <main className="contact-main">
      <Contact defaultMessage={defaultMessage} />
    </main>
  );
};

export default ContactPage;

{
  /* <textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" style="height: 148px;"></textarea> */
}
