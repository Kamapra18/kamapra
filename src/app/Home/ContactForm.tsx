"use client";

import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import Heading from "../components/Heading";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_nym796y",
        "template_ex72aqm",
        form.current,
        "uFm-z-wFe_kSMQEqA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesan berhasil dikirim! 🚀");
        },
        (error) => {
          console.log(error.text);
          alert("Gagal mengirim pesan 😢");
        }
      );
  };

  return (
    <section
      id="contact"
      className="h-screen p-5 flex flex-col items-center justify-center">
      <Heading text="Contact" highlight="Me" />
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b-2 py-2">
            <FaUser className="text-cyan-500" />
            <input
              className="w-full focus:outline-none p-2 text-black "
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex items-center gap-2 border-b-2 py-2">
            <FaEnvelope className="text-cyan-500" />
            <input
              className="w-full focus:outline-none p-2 text-black"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex items-start gap-2 border-b-2 py-2">
            <FaCommentDots className="text-cyan-500" />
            <textarea
              className="w-full focus:outline-none p-2 text-black"
              name="message"
              placeholder="Your Message"
              required></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-cyan-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
