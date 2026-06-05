"use client";

import { FaUser, FaEnvelope } from "react-icons/fa";
import Heading from "../components/ui/Heading";
import KamapraButton from "@/app/coba/components/Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_nym796y", "template_ex72aqm", form.current, "uFm-z-wFe_kSMQEqA")
      .then(
        () => {
          Swal.fire({
            title: "Berhasil!",
            text: "Pesan berhasil dikirim. Terima kasih!",
            icon: "success",
            confirmButtonColor: "var(--accent)",
            confirmButtonText: "Oke",
            background: "#111827",
            color: "#fff",
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
      className="py-16 md:py-24 px-4 md:px-6 flex flex-col items-center justify-center min-h-screen relative"
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <Heading text="Get In" highlight="Touch" />

      <div className="mt-10 md:mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 rounded-[2rem] border border-[var(--btn-glass-border)] backdrop-blur-xl shadow-2xl overflow-hidden"
           style={{ background: "var(--btn-glass-bg)" }}>
        
        {/* Sisi Kiri: Info Singkat */}
        <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--btn-glass-border)] relative">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">Ayo Diskusi</h3>
            <p className="text-zinc-400 leading-relaxed font-body">
              Punya ide menarik atau cuma mau menyapa? Silakan kirim pesan, saya akan balas secepat mungkin.
            </p>
          </div>

          <div className="relative z-10 mt-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <FaEnvelope className="text-[var(--accent)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Email</span>
                <span className="text-sm md:text-base text-white">marioprayoga18@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Form */}
        <form ref={form} onSubmit={sendEmail} className="md:col-span-3 p-8 md:p-12 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField label="Nama Lengkap" name="user_name" icon={<FaUser />} placeholder="Nama anda" />
            <InputField label="Email Aktif" name="user_email" icon={<FaEnvelope />} placeholder="email@anda.com" type="email" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400 ml-1 italic font-body">Pesan</label>
            <textarea
              name="message"
              placeholder="Tulis pesan anda di sini..."
              rows={4}
              className="w-full bg-black/20 border border-[var(--btn-glass-border)] rounded-xl py-3 px-4 text-white focus:border-[var(--accent)] focus:outline-none transition-all"
              required
            ></textarea>
          </div>

          <div className="mt-2 w-full">
            <KamapraButton text="Kirim Pesan" iconType="arrow" type="submit" className="w-full !py-4" />
          </div>
        </form>
      </div>
    </section>
  );
}

// Sub-komponen Input biar rapi
function InputField({ label, name, icon, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-400 ml-1 italic font-body">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent)]">{icon}</div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-black/20 border border-[var(--btn-glass-border)] rounded-xl py-3 pl-11 pr-4 text-white focus:border-[var(--accent)] focus:outline-none transition-all"
          required
        />
      </div>
    </div>
  );
}