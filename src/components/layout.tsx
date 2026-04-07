import React, { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { StarBackground } from "./star-background";
import { CursorTrail } from "./cursor-trail";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/logo_1775538520444.png";

const DISCORD_INVITE = "https://discord.gg/kVMNkcPkaq";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/download", label: "Download" },
    { href: "/support", label: "Support" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col text-foreground relative overflow-hidden dark">
      <StarBackground />
      <CursorTrail />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            data-testid="nav-logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={logoImg} alt="Lithium Logo" className="w-10 h-10 object-contain" />
            <span className="font-bold text-2xl tracking-tight text-white group-hover:glow-text transition-all">
              Lithium
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all ${
                  location === link.href
                    ? "text-primary glow-text"
                    : "text-muted-foreground hover:text-primary hover:glow-text"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/download"
              className="hidden md:flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm glow-button"
              data-testid="nav-download-btn"
            >
              Get Lithium
            </Link>
            <button
              className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="nav-hamburger"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 pt-20 bg-background/96 backdrop-blur-xl flex flex-col items-center justify-start gap-2 p-6 md:hidden"
            data-testid="mobile-menu"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="w-full"
              >
                <Link
                  href={link.href}
                  className={`block w-full text-center text-xl font-bold py-4 rounded-xl transition-all ${
                    location === link.href
                      ? "text-primary bg-primary/10 glow-text"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full text-center bg-[#5865F2] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#4752C4] transition-colors"
              data-testid="mobile-discord-link"
            >
              Join Discord
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="w-full"
            >
              <Link
                href="/download"
                className="block w-full text-center bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-bold glow-button"
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-download-btn"
              >
                Get Lithium
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with page enter animation */}
      <main className="flex-1 pt-20 flex flex-col relative z-10">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-md py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 opacity-50">
            <img src={logoImg} alt="Lithium Logo" className="w-5 h-5 object-contain" />
            <span className="font-bold tracking-tight">Lithium</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-discord-link"
            >
              Discord
            </a>
            <Link href="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Support
            </Link>
            <Link href="/download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Download
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lithium Optimization. Elevate your performance.
          </p>
        </div>
      </footer>
    </div>
  );
}
