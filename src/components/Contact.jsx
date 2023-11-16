import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="max-w-[1440px1 h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
      method="POST"
        action="https://getform.io/f/12867363-0053-41fb-ba06-f37e705e687e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-3">
            Submit the form bellow or shoot me an email - prueba@prueba.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="7"
          placeholder="Message"
        />
        <button className="text-white border-2 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 my-3 mx-auto flex items-center">
          Let's Colaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
