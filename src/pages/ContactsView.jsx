

import { useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import ContactForm from "../components/COntactForm";
import ContactDetails from "../components/ContactDetails";
const ContactsView = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editContact, setEditContact] = useState(null);
  const [viewContact, setViewContact] = useState(null);

  const handleSearch = (query) => {
     if (!query) {
    setFilteredContacts(contacts);
    return;
     }

    const lower = query.toLowerCase();

    const filtered = contacts.filter(
      (c) => c.name.toLowerCase().includes(lower) || c.mobile.includes(query),
    );

    setFilteredContacts(filtered);
  };
  const handleViewClick = (contact) => {
  setViewContact(contact);
};
  const handleAddContact = (newContact) => {
    const newEntry = {
      ...newContact,
      id: Date.now(), 
    };

    const updated = [...contacts, newEntry];

    setContacts(updated);
    setFilteredContacts(updated);
  };

  const handleUpdateContact = (updatedContact) => {
    const updated = contacts.map((c) =>
      c.id === editContact.id ? { ...updatedContact, id: c.id } : c,
    );

    setContacts(updated);
    setFilteredContacts(updated);
    setEditContact(null);
  };
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContacts(data || []);
        setFilteredContacts(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleEditClick = (contact) => {
    setEditContact(contact);
    setShowForm(true);
  };
  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    setFilteredContacts(updated);
  };

  if (loading) return <p>Loading...</p>;

 return (
  <div className="max-w-2xl mx-auto p-6">
    <h1 className="text-2xl font-bold mb-4 text-center">Contacts</h1>

    <div className="flex justify-between items-center mb-4">
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      onClick={() => setShowForm(true)}
    >
      Add Contact
    </button>
  </div>

    <SearchBar onSearch={handleSearch} />

    {filteredContacts.length === 0 ? (
      <p className="text-center text-gray-500 mt-4">
      No contacts found
    </p>
    ) : (
      <ContactList
        contacts={filteredContacts}
        onDelete={handleDelete}
        onEdit={handleEditClick}
        onView={handleViewClick}
      />
    )}

    {showForm && (
      <ContactForm
        initialData={editContact || {}}
        onSubmit={editContact ? handleUpdateContact : handleAddContact}
        onClose={() => {
          setShowForm(false);
          setEditContact(null);
        }}
      />
    )}
    {viewContact && (
  <ContactDetails
    contact={viewContact}
    onClose={() => setViewContact(null)}
  />
)}

  </div>
);
};

export default ContactsView;
