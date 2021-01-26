import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  function ContactDetails(contact) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        imglink={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(ContactDetails)}
    </div>
  );
}

export default App;
