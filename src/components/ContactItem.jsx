import "../styles/contact-item.css";

function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact">
      <div className="contact__info">
        <strong>{contact.name}</strong>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>

      <button
        className="contact__delete"
        onClick={() => onDelete(contact.id)}
      >
        x
      </button>
    </li>
  );
}

export default ContactItem;