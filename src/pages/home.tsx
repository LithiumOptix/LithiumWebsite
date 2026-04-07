import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Maximize, Cpu, Settings, Wifi, Zap, Key, Star, Target, Shield, Package } from "lucide-react";
import { Layout } from "@/components/layout";

const DISCORD_INVITE = "https://discord.gg/kVMNkcPkaq";

const features = [
  {
    title: "Stretched Resolution",
    description: "Apply custom resolutions for wider FOV and a massive competitive advantage in duels.",
    icon: <Maximize className="w-8 h-8 text-primary" />,
    tag: "FOV+",
  },
  {
    title: "Windows Optimizations",
    description: "Deep system-level tweaks to reduce input lag and significantly boost responsiveness.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    tag: "LAG-",
  },
  {
    title: "Rivals Settings",
    description: "Pre-configured Roblox settings strictly replicated from top-tier competitive players.",
    icon: <Settings className="w-8 h-8 text-primary" />,
    tag: "PRO",
  },
  {
    title: "Ping Optimizations",
    description: "Network-level TCP/IP tweaks to drastically reduce latency and improve server registry.",
    icon: <Wifi className="w-8 h-8 text-primary" />,
    tag: "PING-",
  },
  {
    title: "Performance Boost",
    description: "FPS unlocking, render distance tweaking, and heavy memory optimization for stable framerates.",
    icon: <Zap className="w-8 h-8 text-primary" />,
    tag: "FPS+",
  },
  {
    title: "HWID Reset",
    description: "Bypass harsh hardware bans with a single click. Get right back into the action.",
    icon: <Key className="w-8 h-8 text-primary" />,
    tag: "UNBAN",
  },
];

const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "100+", label: "FPS Gained" },
  { value: "100%", label: "Unbannable" },
];

const games = [
  {
    placeId: 17625359962,
    name: "Rivals",
    desc: "The #1 competitive Roblox shooter. Lithium was built around this game.",
    border: "border-red-500/25",
    color: "text-orange-400",
    tag: "PRIMARY",
    fallbackGradient: "from-red-500/30 to-orange-500/10",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    placeId: 6872265039,
    name: "Roblox Bedwars",
    desc: "Strategy meets combat. Faster response times mean better plays.",
    border: "border-blue-500/25",
    color: "text-blue-400",
    tag: "SUPPORTED",
    fallbackGradient: "from-blue-500/30 to-cyan-500/10",
    icon: <Shield className="w-10 h-10" />,
  },
  {
    placeId: 6006289549,
    name: "Hypershot",
    desc: "Aim training demands the lowest input lag possible. Lithium delivers.",
    border: "border-purple-500/25",
    color: "text-purple-400",
    tag: "SUPPORTED",
    fallbackGradient: "from-purple-500/30 to-pink-500/10",
    icon: <Target className="w-10 h-10" />,
  },
];

function FPSCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(60);

  useEffect(() => {
    if (!inView) return;
    let start = 60;
    const end = 180;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <section className="py-10" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card"
      >
        <div className="grid grid-cols-2 divide-x divide-border">
          {/* Before */}
          <div className="flex flex-col items-center justify-center p-10 md:p-14 text-center bg-background/40">
            <div className="text-xs font-bold tracking-widest text-muted-foreground/60 mb-4 uppercase">Before Lithium</div>
            <div className="text-7xl md:text-8xl font-black text-muted-foreground/40 tabular-nums">60</div>
            <div className="text-sm font-bold text-muted-foreground/50 mt-2 tracking-wide">FPS</div>
            <div className="mt-4 flex gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-muted-foreground/20" />
              ))}
            </div>
          </div>

          {/* After */}
          <div className="flex flex-col items-center justify-center p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-xs font-bold tracking-widest text-primary mb-4 uppercase">With Lithium</div>
              <div className="text-7xl md:text-8xl font-black text-primary glow-text tabular-nums">{count}</div>
              <div className="text-sm font-bold text-primary/70 mt-2 tracking-wide">FPS</div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    style={{ opacity: inView ? 1 : 0.2, transition: `opacity 0.3s ${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-card border border-primary/40 text-primary font-black text-sm px-3 py-1.5 rounded-full shadow-lg glow-text whitespace-nowrap">
            3× FPS
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const [memberCount, setMemberCount] = useState<number | null>(null);
  const [onlineCount, setOnlineCount] = useState<number | null>(null);

  const [gameThumbnails, setGameThumbnails] = useState<Record<number, string>>({});

  useEffect(() => {
    fetch("https://discord.com/api/invites/kVMNkcPkaq?with_counts=true")
      .then((r) => r.json())
      .then((data) => {
        setMemberCount(data.approximate_member_count);
        setOnlineCount(data.approximate_presence_count);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const ids = games.map((g) => g.placeId).join(",");
    fetch(
      `https://thumbnails.roblox.com/v1/places/gameicons?placeIds=${ids}&size=512x512&format=png&isCircular=false`
    )
      .then((r) => r.json())
      .then((data) => {
        const map: Record<number, string> = {};
        for (const item of data.data ?? []) {
          if (item.state === "Completed") map[item.targetId] = item.imageUrl;
        }
        setGameThumbnails(map);
      })
      .catch(() => {});
  }, []);

  return (
    <Layout>
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 pb-24">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              The Ultimate Competitive Edge
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              Dominate with{" "}
              <span className="gradient-text">Lithium</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              High-performance Roblox optimization engineered for top competitive players. Stop playing at a disadvantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/download"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg glow-button flex items-center justify-center gap-2"
                data-testid="hero-download-btn"
              >
                <Zap className="w-5 h-5" />
                Download Lithium
              </Link>
              <Link
                href="/support"
                className="bg-secondary text-white border border-border px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/80 transition-colors"
                data-testid="hero-support-btn"
              >
                View Features
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-8 w-full max-w-lg border-t border-border/50 pt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary glow-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FPS Counter — Before / After */}
        <FPSCounter />

        {/* Scrolling Marquee */}
        <div className="w-full overflow-hidden border-y border-border/40 bg-background/40 py-4 my-8">
          <div className="marquee-track flex gap-10 w-max whitespace-nowrap">
            {[
              "STRETCHED RESOLUTION",
              "HWID RESET",
              "PING OPTIMIZER",
              "FPS BOOSTER",
              "RIVALS SETTINGS",
              "WINDOWS TWEAKS",
              "1-CLICK UNBAN",
              "PERFORMANCE BOOST",
              "STRETCHED RESOLUTION",
              "HWID RESET",
              "PING OPTIMIZER",
              "FPS BOOSTER",
              "RIVALS SETTINGS",
              "WINDOWS TWEAKS",
              "1-CLICK UNBAN",
              "PERFORMANCE BOOST",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
                  {item}
                </span>
                <span className="text-primary opacity-50 text-lg">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Up and Running in Minutes</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No complicated setup. Just download, apply, and play.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* connector line on desktop */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px border-t border-dashed border-border/60 z-0" />

            {[
              {
                step: "01",
                title: "Download",
                desc: "Get Lithium in seconds. Lightweight, no bloat, no account needed.",
                icon: <Zap className="w-6 h-6 text-primary" />,
              },
              {
                step: "02",
                title: "Apply",
                desc: "Every optimization takes only 1 click to enable. Stretched res, tweaks, ping — all instantly.",
                icon: <Settings className="w-6 h-6 text-primary" />,
              },
              {
                step: "03",
                title: "Dominate",
                desc: "Feel the difference immediately. Higher FPS, lower ping, sharper input.",
                icon: <Star className="w-6 h-6 text-primary" />,
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10 bg-card border border-border rounded-2xl p-8 text-center glow-card flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-primary/50 tracking-widest">STEP {s.step}</div>
                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24" id="features">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Unfair Advantage, Unlocked</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to squeeze out every drop of performance from your machine and network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card border border-border rounded-2xl p-8 glow-card shimmer-card flex flex-col items-start text-left group relative overflow-hidden"
                data-testid={`feature-card-${index}`}
              >
                <div className="shimmer-effect" />
                <div className="relative z-10 flex flex-col items-start w-full h-full">
                  <div className="flex items-start justify-between w-full mb-6">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full tracking-wide">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Supported Games */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Optimized for Top Roblox Games</h2>
            <p className="text-muted-foreground text-lg">Pre-built performance profiles for the most competitive titles.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-card border ${game.border} rounded-2xl overflow-hidden glow-card flex flex-col`}
                data-testid={`game-card-${i}`}
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  {gameThumbnails[game.placeId] ? (
                    <img
                      src={gameThumbnails[game.placeId]}
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${game.fallbackGradient} flex items-center justify-center`}>
                      <div className={game.color}>{game.icon}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-bold border px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm ${game.color} border-current/30`}>
                    {game.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white">{game.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{game.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Changelog */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest Updates</h2>
              <p className="text-muted-foreground">Lithium is actively developed and regularly improved.</p>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full self-start sm:self-auto whitespace-nowrap">
              Current: v1.3
            </span>
          </motion.div>

          <div className="flex flex-col gap-4">
            {[
              { version: "v1.3", date: "Latest", label: "NEW", labelColor: "text-green-400 bg-green-500/10 border-green-500/20", desc: "Added Hypershot optimization profile and improved FPS unlock stability." },
              { version: "v1.2", date: "Recent", label: "UPDATE", labelColor: "text-primary bg-primary/10 border-primary/20", desc: "HWID Reset & bypass tools released. 1-click hardware identifier spoofing." },
              { version: "v1.1", date: "Earlier", label: "UPDATE", labelColor: "text-primary bg-primary/10 border-primary/20", desc: "Ping optimizer upgraded with TCP/IP stack improvements. Avg -40ms reduction." },
              { version: "v1.0", date: "Launch", label: "RELEASE", labelColor: "text-muted-foreground bg-muted/40 border-border", desc: "Initial launch with 6 core optimization modules: stretched res, Windows tweaks, rivals settings, performance boost, ping opt." },
            ].map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-5 bg-card border border-border rounded-2xl p-5 glow-card group"
                data-testid={`changelog-entry-${i}`}
              >
                <div className="flex flex-col items-center gap-2 flex-shrink-0 pt-0.5">
                  <span className="font-mono font-bold text-white text-sm">{entry.version}</span>
                  <div className="w-px flex-1 bg-border/60 min-h-[16px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className={`text-xs font-bold border px-2 py-0.5 rounded-full ${entry.labelColor}`}>
                      {entry.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{entry.date}</span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{entry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Discord Community Banner */}
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-[#5865F2]/30 bg-gradient-to-br from-[#5865F2]/10 via-card to-primary/5 p-10 md:p-14 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/5 via-transparent to-primary/5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#5865F2]/50 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-5">
              <div className="flex items-center gap-2 text-sm font-medium bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {onlineCount != null
                  ? `${onlineCount.toLocaleString()} members online now`
                  : "Community Active"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Join the Lithium Community
              </h2>
              <p className="text-muted-foreground max-w-lg text-lg">
                {memberCount != null
                  ? `${memberCount.toLocaleString()} members and growing. Get early access, share clips, and connect with the best Roblox players.`
                  : "Join thousands of elite players. Get early access, share clips, and connect with the best."}
              </p>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-3 bg-[#5865F2] text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#4752C4] transition-colors shadow-lg"
                data-testid="discord-banner-btn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.112 18.1.13 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join Discord
                {memberCount != null && (
                  <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    {memberCount.toLocaleString()} members
                  </span>
                )}
              </a>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 border border-primary/20 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to stop losing?</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Join the ranks of elite players using Lithium to dominate their lobbies. The competition is already using it.
            </p>
            <Link
              href="/download"
              className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg glow-button items-center justify-center gap-2"
              data-testid="bottom-download-btn"
            >
              Get Started Now
            </Link>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
