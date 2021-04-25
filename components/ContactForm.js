import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios("api/contact-form", {
      method: "POST",
      data: form,
    });
  };

  return (
    <div>
      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <label className="block mt-3 mb-2.5">
          Name
          <input
            type="text"
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="block bg-gray-100 rounded-md px-1.5 mt-0.5 w-full"
          />
        </label>
        <label className="block mb-2.5">
          Email
          <input
            type="email"
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            className="block bg-gray-100 rounded-md px-1.5 mt-0.5 w-full"
          />
        </label>
        <label className="block">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="block bg-gray-100 rounded-md px-1.5 w-full h-36 mt-0.5"
          />
        </label>
        <button
          type="submit"
          className="py-0.2 px-2.5 bg-red-600 text-white rounded-md mt-2 w-full md:w-auto"
        >
          Submit
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>
          Or you can get in touch with me at{" "}
          <a
            href="mailto:louie.richardson99@gmail.com"
            className="hover:text-red-600 text-red-600 font-semibold"
          >
            louie.richardson99@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
