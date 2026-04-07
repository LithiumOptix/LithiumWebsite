import React from "react";
import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, AtSign } from "lucide-react";

const DISCORD_INVITE = "https://discord.gg/kVMNkcPkaq";

export default function Support() {
  const faqs = [
    {
      question: "What is Lithium?",
      answer: "Lithium is a premium optimization tool designed specifically for Roblox players. It alters system settings, network configurations, and game memory to provide the lowest latency and highest FPS possible."
    },
    {
      question: "What games does it support?",
      answer: "While many of our Windows and Ping optimizations apply globally to all games, Lithium is explicitly tailored, tested, and pre-configured for Roblox and competitive Roblox titles like Rivals."
    },
    {
      question: "Is it safe to use?",
      answer: "Yes. Our tweaks are done at the OS and registry level to improve legitimate performance metrics. We do not inject malicious code into the game client, keeping your account safe from standard anti-cheat detection."
    },
    {
      question: "How do I apply stretched resolution?",
      answer: "Once installed, navigate to the 'Visuals' tab in Lithium. Select your monitor's aspect ratio, choose your desired custom resolution, and click 'Apply Stretched'. The software will handle the display scaling automatically."
    },
    {
      question: "Will this get me banned?",
      answer: "Lithium focuses on system optimization and memory unlocking rather than exploiting game mechanics. While HWID spoofing features are provided for users who are already banned, the core performance optimizations carry zero ban risk."
    },
    {
      question: "How do I reset my HWID?",
      answer: "In the Lithium dashboard, go to the 'Bypass' tab and click 'Reset Identifiers'. You will need to restart your PC for the changes to fully apply and bypass hardware-level bans."
    }
  ];

  return (
    <Layout>
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support Center</h1>
          <p className="text-xl text-muted-foreground">Everything you need to know about Lithium.</p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="bg-card border border-border rounded-2xl p-6 glow-card">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors hover:no-underline py-4" data-testid={`faq-trigger-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Contact / Get Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">Need Help?</h2>
          <p className="text-muted-foreground mb-8">
            Still stuck? Reach out and you'll get a response fast.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Discord Server */}
            <div className="bg-card border border-border rounded-2xl p-8 glow-card flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center mb-4">
                <MessageSquare className="text-[#5865F2] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discord Server</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join the community server for the fastest support, updates, and announcements.
              </p>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5865F2] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#4752C4] transition-colors w-full"
                data-testid="contact-discord-btn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.112 18.1.13 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join Discord
              </a>
            </div>

            {/* DM on Discord */}
            <div className="bg-card border border-border rounded-2xl p-8 glow-card flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <AtSign className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">DM on Discord</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Send a direct message for personal help, billing questions, or anything private.
              </p>
              <a
                href="https://discord.com/users/wydlies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary border border-primary/20 px-6 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all w-full"
                data-testid="contact-dm-btn"
              >
                wydlies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
