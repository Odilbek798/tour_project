import React, { useState } from "react";
import Header from "../components/Header/Header";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = "YOUR_BOT_TOKEN";
    const chat_id = "YOUR_CHAT_ID";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `Name: ${name}\nPhone: ${phone}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id,
          text: message,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        alert("Message sent!");
        setName("");
        setPhone("");
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="contact-container">
        <Header/>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;