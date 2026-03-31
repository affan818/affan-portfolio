"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function TerminalContact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* card reveal animation */

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: "power3.out",
    });

    /* floating blobs animation */

    gsap.to(".blob1", {
      x: 120,
      y: 80,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".blob2", {
      x: -100,
      y: -60,
      duration: 14,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  /* success animation */

  useEffect(() => {
    if (!sent) return;

    gsap.from(".terminal-line", {
      opacity: 0,
      y: 8,
      stagger: 0.25,
      duration: 0.4,
    });
  }, [sent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (res.ok) {
      setTimeout(() => {
        setSending(false);
        setSent(true);
        form.reset();
      }, 1200);
    } else {
      alert("Message failed");
      setSending(false);
    }
  };

  return (
    <section className="relative py-32 px-6 bg-[#0f172a] overflow-hidden">
      {/* floating blobs */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob1 absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full top-[-120px] left-[-120px]" />

        <div className="blob2 absolute w-[350px] h-[350px] bg-indigo-500/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      {/* grid background */}

      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* main card */}

      <div
        ref={cardRef}
        className="relative max-w-3xl mx-auto border border-slate-700 rounded-xl overflow-hidden bg-[#020617] shadow-xl"
      >
        {/* terminal header */}

        <div className="flex items-center gap-2 px-4 py-3 bg-[#020617] border-b border-slate-700">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>

          <p className="ml-4 text-slate-400 text-sm font-mono">contact.dev</p>
        </div>

        <div className="p-8 font-mono">
          <p className="text-slate-300 mb-6">
            visitor@portfolio:~$ contact affan
          </p>

          {!sent && !sending && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* name */}

              <div>
                <label className="text-sm text-slate-400">Name</label>

                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 outline-none text-slate-200 focus:border-blue-500 transition"
                />
              </div>

              {/* email */}

              <div>
                <label className="text-sm text-slate-400">Email</label>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 outline-none text-slate-200 focus:border-blue-500 transition"
                />
              </div>

              {/* message */}

              <div>
                <label className="text-sm text-slate-400">Message</label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Write your message..."
                  className="w-full mt-1 bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 outline-none text-slate-200 focus:border-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition"
              >
                Send Message
              </button>
            </form>
          )}

          {/* sending animation */}

          {sending && (
            <div className="mt-8 space-y-2 text-slate-400">
              <p className="terminal-line">Sending request...</p>

              <p className="terminal-line animate-pulse">
                Processing message...
              </p>
            </div>
          )}

          {/* success animation */}

          {sent && (
            <div className="mt-8 space-y-2">
              <p className="terminal-line text-slate-400">Sending request...</p>

              <p className="terminal-line text-slate-400">
                Processing message...
              </p>

              <p className="terminal-line text-blue-400">
                ✔ Email delivered successfully
              </p>

              <p className="terminal-line text-slate-500">
                visitor@portfolio:~$
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
