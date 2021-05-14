import { useState } from "react";
import axios from "axios";

export default function EmailListForm() {
  const [form, setForm] = useState({ email: "" });
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios("https://api.convertkit.com/v3/forms/2278223/subscribe", {
      method: "POST",
      data: {
        api_key: "pvAzGYyFMN6Q9q7OSHH6SA",
        email: form.email,
      },
    })
      .then(() => {
        setResponse(
          "Success! Now check your email to confirm your subscription."
        );
      })
      .catch(() => {
        setResponse("There seems to be an error.");
      })
      .finally(() => setForm({ email: "" }));
  };

  const handleChange = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-4">
      <p className="text-center">Join the mailing list!</p>
      <form onSubmit={handleSubmit} className="sm:w-96 mx-auto mt-3">
        <input
          className="bg-gray-100 rounded-sm p-2 w-full"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
          value={form.email}
        ></input>
        <button
          className="bg-green-500 text-white p-2 rounded-sm w-full mt-1"
          type="submit"
        >
          Subscribe<i className="fas fa-envelope-open-text ml-2"></i>
        </button>
      </form>
      {response && <p className="text-center mt-3">{response}</p>}
    </div>
  );
}
