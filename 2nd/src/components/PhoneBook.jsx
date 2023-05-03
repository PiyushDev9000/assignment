import React, { useState } from "react";
import ContactForm from "./ContactForm";
import './phoneBook.scss'

function PhoneBook() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Piyush", phone: "12345-67890" },
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: contacts.length + 1, ...contact }]);
  };

  return (
    <div className="phone-book">
      <h1>Phone Book</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
          </li>
        ))}
      </ul>
      <div>
      <ContactForm addContact={addContact} />
      </div>
    </div>
    
  );
}

export default PhoneBook;
