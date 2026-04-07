import React, { useState } from "react";
import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import logoImg from "@assets/logo_1775538520444.png";
import { Bell, CheckCircle, Monitor, Cpu, Wifi, HardDrive, Check } from "lucide-react";

const sysReqs = [
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    label: "OS",
    value: "Windows 10 / 11 (64-bit)",
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    label: "CPU",
    value: "Intel / AMD — any modern CPU",
  },
  {
    icon: <HardDrive className="w-6 h-6 text-primary" />,
    label: "RAM",
    value: "4 GB minimum, 8 GB recommended",
  },
  {
    icon: <Wifi className="w-6 h-6 text-primary" />,
    label: "Network",
    value: "Internet connection required",
  },
];

export default function Download() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Please enter your Discord username.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-20 flex flex-col gap-8 items-center">

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border p-10 md:p-16 rounded-3xl glow-card text-center w-full relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 flex items-center justify-center mb-8"
            >
              <img src={logoImg} alt="Lithium Logo" className="w-20 h-20 object-contain" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Coming <span className="text-primary glow-text">Soon</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
              Lithium is undergoing final QA testing to ensure zero ban risk and maximum performance. The unfair advantage is almost ready.
            </p>

            <a
              href="https://discord.gg/kVMNkcPkaq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#5865F2] text-white px-7 py-3 rounded-full font-bold hover:bg-[#4752C4] transition-colors mb-10"
              data-testid="download-discord-btn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.112 18.1.13 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Join Discord for Early Access
            </a>

            {/* Divider */}
            <div className="w-full h-px bg-border/60 mb-10" />

            {/* Notify Me Form */}
            <div className="w-full max-w-md">
              <p className="text-sm font-semibold text-white mb-1">Get pinged when Lithium drops</p>
              <p className="text-xs text-muted-foreground mb-4">Enter your Discord username and we'll notify you the moment it's live.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => { setUsername(e.target.value); setError(""); }}
                      placeholder="e.g. yourname or yourname#1234"
                      className="flex-1 bg-background border border-border rounded-full px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                      data-testid="notify-input"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold text-sm glow-button flex items-center gap-2 whitespace-nowrap"
                      data-testid="notify-submit"
                    >
                      <Bell className="w-4 h-4" />
                      Notify Me
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-xs text-left pl-2">{error}</p>}
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-2xl px-5 py-4 text-green-400"
                  data-testid="notify-success"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium text-left">
                    You're on the list! We'll ping you on Discord the moment Lithium launches.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full bg-card border border-border rounded-3xl p-8 glow-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <h2 className="text-xl font-bold text-white">System Requirements</h2>
            <span className="ml-auto text-xs text-green-400 font-semibold bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-full">
              Lightweight
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {sysReqs.map((req, i) => (
              <div key={i} className="flex items-start gap-4 bg-background/50 border border-border/50 rounded-xl p-4">
                <div className="bg-primary/10 p-2.5 rounded-lg flex-shrink-0">{req.icon}</div>
                <div>
                  <div className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-0.5">{req.label}</div>
                  <div className="text-sm font-medium text-white">{req.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border/60 pt-5 flex flex-col gap-2">
            {[
              "No Roblox account required to run optimizations",
              "Compatible with all GPU brands (NVIDIA, AMD, Intel)",
              "Does not modify game files — safe from anti-cheat",
            ].map((note, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                {note}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Layout>
  );
}
