import "./Contact.css";
import msgicon from "../../assets/msg-icon.png";
import mailicon from "../../assets/mail-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import locationicon from "../../assets/location-icon.png";
import whitearrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2c42be1c-2ade-4fdd-ba35-2bc3b09bd424");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contactcol">
        <h3>
          Send us a message <img src={msgicon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mailicon} alt="" />
            Contact@Yashweb.dev
          </li>
          <li>
            <img src={phoneicon} alt="" />
            +1 123-456-7890
          </li>
          <li>
            <img src={locationicon} alt="" />
            77 Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contactcol">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn darkbtn">
            Submit Now <img src={whitearrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
