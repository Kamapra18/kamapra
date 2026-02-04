"use client";

import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import Heading from "../components/Heading";
import KamapraButton from "../components/ui/ButtonKamapra"; 
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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
        "uFm-z-wFe_kSMQEqA",
      )
      .then(
        () => {
          Swal.fire({
            title: "Berhasil!",
            text: "Pesan berhasil dikirim. Terima kasih sudah menghubungi kami!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Oke",
          });
          form.current?.reset();
        },
        () => {
          Swal.fire({
            title: "Gagal!",
            text: "Pesan gagal dikirim. Silakan coba lagi nanti.",
            icon: "error",
            confirmButtonText: "Tutup",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-6 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] -z-10"></div>

      <Heading text="Get In" highlight="Touch" />

      <div className="mt-10 md:mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-white/10 shadow-2xl bg-[#0a0a0a]/50 backdrop-blur-xl">
        {/* Sisi Kiri: Info Singkat */}
        <div
          className="md:col-span-2 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden"
          style={{ background: "var(--color-secondary)" }}>
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              Ayo Diskusi
            </h3>
            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              Punya ide menarik atau cuma mau menyapa? Silakan kirim pesan, saya
              akan balas secepat mungkin.
            </p>
          </div>

          <div className="relative z-10 mt-10 md:mt-0">
            <div className="group flex items-start gap-4 text-white/90 transition-all">
              <div className="shrink-0 p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl border border-white/20 backdrop-blur-lg shadow-inner group-hover:bg-white/20 transition-colors">
                <FaEnvelope className="text-lg md:text-xl" />
              </div>

              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-semibold">
                  Email
                </span>
                <span className="text-sm md:text-lg font-medium break-words leading-snug">
                  marioprayoga18@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:col-span-3 p-8 md:p-12 flex flex-col gap-5 md:gap-6 bg-transparent">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <div className="space-y-2">
              <label className="text-xs md:text-sm text-gray-400 ml-1 italic">
                Nama Lengkap
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                <input
                  name="user_name"
                  type="text"
                  placeholder="Nama anda"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm md:text-base focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs md:text-sm text-gray-400 ml-1 italic">
                Email Aktif
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                <input
                  name="user_email"
                  type="email"
                  placeholder="email@anda.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm md:text-base focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs md:text-sm text-gray-400 ml-1 italic">
              Pesan
            </label>
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-gray-500 text-sm" />
              <textarea
                name="message"
                placeholder="Tulis pesan anda di sini..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm md:text-base focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-gray-600"
                required></textarea>
            </div>
          </div>

          {/* Menggunakan KamapraButton sebagai Submit Button */}
          <div className="mt-2 w-full flex justify-center md:justify-start">
            <KamapraButton
              text="Kirim Pesan"
              type="submit" 
              variant="blue"
              className="!w-full md:!w-auto !py-4 !text-base"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
