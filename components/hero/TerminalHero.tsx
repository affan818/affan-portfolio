"use client";

import { useState, useEffect } from "react";
import { FiDownload, FiPhone } from "react-icons/fi";

const bootLogs = [
  "Booting portfolio...",
  "Loading modules...",
  "Compiling components...",
  "Starting dev server...",
  "Skilled frontend developer...",
  "Portfolio ready ✓",
];

const commands = [
  { cmd: "who_am_i", output: "Affan Ahmad" },
  { cmd: "stack", output: "Next.js • React • Shopify • Node" },
  { cmd: "status", output: "Available for work" },
];

export default function TerminalHero() {
  const [start, setStart] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  const [cmdIndex, setCmdIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [showCommands, setShowCommands] = useState(false);

  // Boot animation
  useEffect(() => {
    if (!start) return;

    let i = 0;

    const interval = setInterval(() => {
      setLogs((prev) => [...prev, bootLogs[i]]);
      i++;

      if (i === bootLogs.length) {
        clearInterval(interval);

        setTimeout(() => {
          setReady(true);
          setShowCommands(true);
          document.body.style.overflow = "auto";
        }, 600);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [start]);

  // Typing commands
  useEffect(() => {
    if (!showCommands) return;

    if (cmdIndex >= commands.length) return;

    let charIndex = 0;
    const current = commands[cmdIndex];

    const typing = setInterval(() => {
      setTyped(current.cmd.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === current.cmd.length) {
        clearInterval(typing);

        setTimeout(() => {
          setCmdIndex((prev) => prev + 1);
          setTyped("");
        }, 800);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [cmdIndex, showCommands]);

  useEffect(() => {
    if (!ready) document.body.style.overflow = "hidden";
  }, [ready]);

  return (
    <section className="h-screen flex items-center justify-center px-6 bg-[#0f172a] text-slate-200 font-mono">
      <div className="w-full max-w-4xl border border-slate-700 rounded-xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#020617] border-b border-slate-700">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>

          <p className="ml-4 text-sm text-slate-400">portfolio.dev</p>
        </div>

        <div className="p-8 space-y-3">
          {!start && (
            <>
              <p>Welcome to my developer portfolio</p>

              <button
                onClick={() => setStart(true)}
                className="mt-6 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition"
              >
                Start Portfolio
              </button>
            </>
          )}

          {start && (
            <>
              {/* Boot logs */}
              {logs.map((line, i) => (
                <p key={i}>
                  <span className="text-blue-400">&gt;</span> {line}
                </p>
              ))}

              {!ready && (
                <p className="animate-pulse text-slate-400">loading...</p>
              )}

              {/* Commands */}
              {showCommands && (
                <>
                  {commands.slice(0, cmdIndex).map((c, i) => (
                    <div key={i}>
                      <p>
                        <span className="text-blue-400">&gt;</span> {c.cmd}
                      </p>
                      <p className="text-slate-400 ml-4">{c.output}</p>
                    </div>
                  ))}

                  {/* typing current */}
                  {cmdIndex < commands.length && (
                    <p>
                      <span className="text-blue-400">&gt;</span> {typed}
                      <span className="animate-pulse">|</span>
                    </p>
                  )}
                </>
              )}

              {/* Final UI */}
              {cmdIndex >= commands.length && (
                <div className="mt-6">
                  <p className="text-blue-400">Scroll down ↓</p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <a
                      href="/affan-resume.pdf"
                      download
                      className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm transition"
                    >
                      <FiDownload /> Resume
                    </a>

                    <a
                      href="tel:+918830026874"
                      className="flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-600 hover:border-blue-400 text-sm transition"
                    >
                      <FiPhone /> Call
                    </a>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
