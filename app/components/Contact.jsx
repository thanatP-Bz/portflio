import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d2887ce2-48dd-48f5-b0bc-e16871ff2a90");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[lenth:90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Contact Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam culpa
        rerum nostrum exercitationem sint corrupti.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5] border-gray-400 round-md bg-white rounded-md"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5] border-gray-400 round-md bg-white rounded-md"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
        ></textarea>

        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-dark duration-500 cursor-pointer"
          type="sumbit"
        >
          Submit{" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-5 cursor-pointer"
          />
        </button>
        <p className="mt-4">{result}!</p>
      </form>
    </div>
  );
};

export default Contact;
