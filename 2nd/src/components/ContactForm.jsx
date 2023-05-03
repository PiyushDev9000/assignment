import React, { useState } from "react";
import './contactForm.scss'

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">
        Name:
        <input
         className="form-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className="form-label">
        Phone:
        <input
         className="form-input"
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <button className="form-button" type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
