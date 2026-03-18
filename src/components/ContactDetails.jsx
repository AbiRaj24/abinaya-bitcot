const ContactDetails = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
   <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
  <div className="bg-white p-5 rounded w-96 shadow-lg">
    <h3 className="text-lg font-semibold mb-3">Contact Details</h3>

    <p className="mb-2"><b>Name:</b> {contact.name}</p>
    <p className="mb-2"><b>Mobile:</b> {contact.mobile}</p>
    <p className="mb-2"><b>Email:</b> {contact.email}</p>

    <button
      className="mt-3 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
      onClick={onClose}
    >
      Close
    </button>
  </div>
</div>
  );
};

export default ContactDetails;