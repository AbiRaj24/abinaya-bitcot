const ContactItem = ({ contact, onDelete,onEdit,onView }) => {
  return (
<div className="flex justify-between items-center bg-white border rounded p-3 mb-2 shadow-sm">
  <div>
    <p className="font-semibold">{contact.name}</p>
    <p className="text-sm text-gray-500">{contact.mobile}</p>
  </div>

      <div className="flex gap-2">
    <button
      className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-sm"
      onClick={() => onView(contact)}
    >
      <i class="bi bi-eye-fill"></i>
    </button>

    <button
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-sm"
      onClick={() => onEdit(contact)}
    >
      <i class="bi bi-pencil-fill"></i>
    </button>

    <button
      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
      onClick={() => onDelete(contact.id)}
    >
      <i class="bi bi-archive-fill"></i>
    </button>
    </div>
    </div>
  );
};

export default ContactItem;