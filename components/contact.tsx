import React from "react";
import Image from "next/image";
import {
  contactInfo,
  socialLinks,
  contactFormFields,
} from "../data/contactData";

const Contact = () => {
  return (
    <div className="contact-page py-16 px-8 bg-gray-100">
      {/* Contact Info Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {contactInfo.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {contactInfo.description}
        </p>
      </section>

      {/* Contact Details */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">{contactInfo.email}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">{contactInfo.phone}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">{contactInfo.address}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Send Us a Message
        </h2>
        <form>
          {contactFormFields.map((field) => (
            <div key={field.name} className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-gray-700 font-medium mb-2"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Links */}
      <section className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={40}
              height={40}
              className="inline-block"
            />
          </a>
        ))}
      </section>
    </div>
  );
};

export default Contact;
