import ContactItem from "./ContactItem";
import "../styles/contact-list.css";

function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <p className="list__empty">Список контактов пуст</p>;
  }

  return (
    <ul className="list">
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;