import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could send form data to your API route or a serverless function
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto py-16 px-6">
        <h1 className="text-3xl font-sora font-bold mb-6">Get in Touch</h1>
        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-md">
            Thank you for contacting us! We will get back to you shortly.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-sora mb-1">Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-sora mb-1">Email</label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-sora mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full border px-3 py-2 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-sora"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}
