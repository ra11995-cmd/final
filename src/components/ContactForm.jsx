import { useState } from "react";
import "../styles/contact-form.css";

function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) return;

    onAdd({
      id: Date.now(),
      name,
      phone,
      email,
    });

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form__input"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        className="form__input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="form__button">Добавить</button>
    </form>
  );
}

export default ContactForm;