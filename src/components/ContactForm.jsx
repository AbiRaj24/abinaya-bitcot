import { useState ,useEffect} from "react";

const ContactForm = ({ onSubmit, initialData = {}, onClose }) => {
  const [form, setForm] = useState({
    name: initialData.name || "",
    mobile: initialData.mobile || "",
    email: initialData.email || "",
  });
useEffect(() => {
  setForm({
    name: initialData.name || "",
    mobile: initialData.mobile || "",
    email: initialData.email || "",
  });
}, [initialData]);
  const [errors, setErrors] = useState({});

  const validate = () => {
  const err = {};

  if (!form.name) err.name = "Name required";

  if (!form.mobile) {
    err.mobile = "Mobile required";
  } else if (!form.mobile.match(/^\d{10}$/)) {
    err.mobile = "Enter valid 10 digit number"; 
  }

  if (!form.email) err.email = "Email required";

  return err;
};

  const handleSubmit = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(form);
    onClose(); // close modal after submit
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
  <div className="bg-white w-[380px] p-6 rounded-2xl shadow-2xl animate-fadeIn">
    
    <h3 className="text-xl font-semibold mb-4 text-gray-800">
      {initialData?.id ? "Edit Contact" : "Add Contact"}
    </h3>

    {/* Name */}
    <div className="mb-3">
      <input
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-2 w-full rounded-lg transition"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && (
        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
      )}
    </div>

    {/* Mobile */}
    <div className="mb-3">
      <input
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-2 w-full rounded-lg transition"
        name="mobile"
        placeholder="Mobile"
        value={form.mobile}
        onChange={handleChange}
      />
      {errors.mobile && (
        <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
      )}
    </div>

    {/* Email */}
    <div className="mb-4">
      <input
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none p-2 w-full rounded-lg transition"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && (
        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
      )}
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-3">
      <button
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
        onClick={onClose}
      >
        Cancel
      </button>

      <button
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  </div>
</div>
  );
};

export default ContactForm;