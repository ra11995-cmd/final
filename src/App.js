import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    console.log("Список обнавлен", contacts)
  }, [contacts])

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div className="app">
      <h1 className="app_title"> Contact-manager</h1>
      <ContactForm onAdd={addContact}/>
      <ContactList contacts={contacts} onDelete={deleteContact}/>

    </div>
  )
 }

export default App;
