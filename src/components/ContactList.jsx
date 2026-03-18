import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDelete, onEdit,onView }) => {
  return (
    <div>
      {contacts.map((c) => (
        <ContactItem
          key={c.id}
          contact={c}
          onDelete={onDelete}
          onEdit={onEdit}
           onView={onView}
        />
      ))}
    </div>
  );
};

export default ContactList;
