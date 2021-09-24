import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [contact, setContact] = useState({
    name: "",
    emailID: "",
    address: "",
    phone: ""
  });
  const [contacts, setContacts] = useState([]);

  const addContact = (e) => {
    e.preventDefault();
    const { name, emailID, address, phone } = contact;
    const formValid =
      name &&
      emailID
      address &&
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-s.]{0,1}[0-9]{3}[-s.]{0,1}[0-9]{4}$/.test(
        phone
      );
    if (!formValid) {
      return;
    }
    setContacts((contacts) => [
      ...contacts,
      { id: uuidv4(), name, emailID, address, phone }
    ]);
  };

  const editContact = (index) => {
    setContacts((contacts) => contacts.filter((_, i) => i !== index));
  }

  const deleteContact = (index) => {
    setContacts((contacts) => contacts.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <form onSubmit={addContact}>
        <div>
          <label>name</label>
          <input
            value={contact.name}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label>emailID</label>
          <input
            value={contact.emailID}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, emailID: e.target.value }))
            }
          />

        </div>
        <div>
          <label>address</label>
          <input
            value={contact.address}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, address: e.target.value }))
            }
          />
        </div>
        <div>
          <label>phone</label>
          <input
            value={contact.phone}
            onChange={(e) =>
              setContact((contact) => ({ ...contact, phone: e.target.value }))
            }
          />
        </div>
        <button type="submit">add</button>
      </form>
      {contacts.map((contact, index) => {
        return (
          <div key={contact.id}>
            <p>name : {contact.name}</p>
            <p>email-ID : {contact.emailID}</p>
            <p>address : {contact.address}</p>
            <p>phone : {contact.phone}</p>
            <button type="button" onClick={() => editContact(index)}>
              edit
            </button>
            <button type="button" onClick={() => deleteContact(index)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
