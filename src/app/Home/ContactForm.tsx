"use client";

import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import Heading from "../components/Heading";
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
        "uFm-z-wFe_kSMQEqA"
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
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-5 flex flex-col items-center justify-center min-h-screen">
      <Heading text="Get In" highlight="Touch" />

      <div className="mt-16 w-full max-w-5xl grid md:grid-cols-5 gap-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#0a0a0a]/50 backdrop-blur-xl">
        {/* Sisi Kiri: Info Singkat (2 Kolom) */}
        <div className="md:col-span-2 bg-[image:var(--color-secondary)] backdrop-blur-md p-10 flex flex-col justify-between border-r border-white/10 relative overflow-hidden">
          {/* Overlay halus agar teks lebih terbaca jika warna secondary terlalu terang */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
              Ayo Diskusi
            </h3>
            <p className="text-white/80 leading-relaxed text-lg">
              Punya ide menarik atau cuma mau menyapa? Silakan kirim pesan, saya
              akan balas secepat mungkin.
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="group flex items-center gap-4 text-white/90 transition-all">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-lg shadow-inner group-hover:bg-white/20 transition-colors">
                <FaEnvelope className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">
                  Email
                </span>
                <span className="text-lg font-medium">
                  marioprayoga18@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Form (3 Kolom) */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:col-span-3 p-10 flex flex-col gap-6 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Nama Lengkap</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                <input
                  name="user_name"
                  type="text"
                  placeholder="Nama anda"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Email Aktif</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                <input
                  name="user_email"
                  type="email"
                  placeholder="email@anda.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 ml-1">Pesan</label>
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-4 text-gray-500 text-sm" />
              <textarea
                name="message"
                placeholder="Tulis pesan anda di sini..."
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                required></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="group flex items-center justify-center gap-2 bg-[image:var(--color-primary)] hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/20">
            <span>Kirim Pesan</span>
            <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}
