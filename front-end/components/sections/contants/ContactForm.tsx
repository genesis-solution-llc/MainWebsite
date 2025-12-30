"use client";

import React, { useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  file?: File | null;
};

const SERVICES = [
  "IT supporting",
  "Website service",
  "Mobile spplications",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files && e.target.files[0];
    setForm((s) => ({ ...s, file: f || null }));
  }

  function triggerFileDialog() {
    fileRef.current?.click();
  }

  function validate() {
    if (!form.name.trim()) return "Нэрээ оруулна уу ";
    if (!form.email.trim() && !form.phone.trim()) return "Имэйл эсвэл Дугаар аа оруулна уу";
    if (!form.service) return "Үйлчилгээг сонгоно уу";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-2xl bg-linear-to-br from-[#0a1118]/60 to-[#07101a]/60 p-6 shadow-2xl border border-slate-700/20 backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* Left: form */}
            <div className="p-6 md:p-10 rounded-lg bg-linear-to-br from-white/1 to-transparent border border-slate-800/40">
              <h3 className="text-4xl font-semibold text-white">Ready to collaborate with us?</h3>
              <p className="mt-2 text-slate-300">Who knows where a single message might lead you.</p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="relative block">
                    <span className="sr-only">Your Name</span>
                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      {/* person icon */}
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 21v-1a6 6 0 00-6-6H10a6 6 0 00-6 6v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name*"
                      className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-4 py-3 pl-12 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </label>

                  <label className="relative block">
                    <span className="sr-only">Email</span>
                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address*"
                      className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-4 py-3 pl-12 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="relative block">
                    <span className="sr-only">Contact No</span>
                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92V21a1 1 0 01-1 1c-10 0-18-8-18-18a1 1 0 011-1h4.09a1 1 0 01.95.68l1.48 4.43a1 1 0 01-.24.97L7.09 10.91a11.05 11.05 0 005 5l1.72-1.09a1 1 0 01.97-.24l4.43 1.48c.44.15.73.56.73 1.02z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Contact No*"
                      className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-4 py-3 pl-12 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </label>

                  <label className="relative block">
                    <span className="sr-only">Attach file</span>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path d="M21.44 11.05l-8.49 8.49a5 5 0 01-7.07-7.07l8.49-8.49a3.5 3.5 0 014.95 4.95L11.83 14.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={triggerFileDialog}
                        className="flex h-10 items-center rounded-md bg-slate-800/60 border border-slate-700 px-3 text-slate-200 hover:bg-slate-700/60"
                      >
                        Attach file…
                      </button>
                      <span className="text-sm text-slate-400">{form.file ? form.file.name : "No file"}</span>
                      <input ref={fileRef} onChange={handleFilePick} type="file" className="sr-only" />
                    </div>
                  </label>
                </div>

                <div>
                  <label className="block">
                    <span className="sr-only">Select Service</span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select Service*</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-slate-900 text-white space-y-10">
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div>
                  <label className="block">
                    <span className="sr-only">Your Message</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message.."
                      rows={5}
                      className="w-full rounded-md bg-slate-800/60 border border-slate-700 px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </label>
                </div>

                {error && <div className="text-rose-400 text-sm">{error}</div>}
                {sent && <div className="text-emerald-400 text-sm">Thanks — we received your message!</div>}

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-emerald-400 to-teal-400 px-8 py-4 text-center font-bold text-black shadow-md hover:brightness-95 disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Илгээх"}
                    <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: map */}
            <div className="rounded-lg overflow-hidden border border-slate-700/40">
              <iframe
                src="google.com/maps/search/Ulaanbaatar%2C%2014200%2C%20Mongolia"
                className="h-full w-full min-h-110 bg-white"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
