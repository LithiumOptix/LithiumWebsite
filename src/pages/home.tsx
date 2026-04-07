import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Maximize, Cpu, Settings, Wifi, Zap, Key, 
  Star, Target, Shield, Package, ChevronRight,
  Download, Users, Activity
} from "lucide-react";
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
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(60);

  useEffect(() => {
    if (!inView) return;
    let start = 60;
    const end = 180;
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <section className="py-10" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Before */}
          <div className="flex flex-col items-center justify-center p-12 text-center bg-background/20">
            <div className="text-xs font-bold tracking-widest text-muted-foreground/60 mb-4 uppercase">Stock Performance</div>
            <div className="text-7xl md:text-8xl font-black text-muted-foreground/30 tabular-nums">60</div>
            <div className="text-sm font-bold text-muted-foreground/40 mt-2 tracking-widest">STABLE FPS</div>
            <div className="mt-6 flex gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
              ))}
            </div>
          </div>

          {/* After */}
          <div className="flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-xs font-bold tracking-widest text-primary mb-4 uppercase">Lithium Optimized</div>
              <div className="text-7xl md:text-8xl font-black text-primary glow-text tabular-nums">
                {count}
              </div>
              <div className="text-sm font-bold text-primary/70 mt-2 tracking-widest">MAXIMIZED FPS</div>
              <div className="mt-6 flex gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0.2 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.6)]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-background border-2 border-primary/50 text-primary font-black text-sm px-4 py-2 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] whitespace-nowrap"
          >
            +200% BOOST
          </motion.div>
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
    // Fetch Discord Stats
    fetch("https://discord.com/api/invites/kVMNkcPkaq?with_counts=true")
      .then((r) => r.json())
      .then((data) => {
        setMemberCount(data.approximate_member_count);
        setOnlineCount(data.approximate_presence_count);
      })
      .catch(() => {});

    // Fetch Roblox Thumbnails
    const ids = games.map((g) => g.placeId).join(",");
    fetch(`https://thumbnails.roblox.com/v1/places/gameicons?placeIds=${ids}&size=512x512&format=png&isCircular=false`)
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
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 pb-24 overflow-x-hidden">
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-20">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v1.3 LIVE: Hypershot Profiles Added
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              DOMINATE WITH <br />
              <span className="gradient-text italic">LITHIUM</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium">
              The industry-standard optimization suite for competitive Roblox. 
              Engineered to eliminate latency and unlock your hardware's true potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-20 w-full sm:w-auto">
              <Link
                href="/download"
                className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black text-lg glow-button flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5" />
                GET LITHIUM NOW
              </Link>
              <Link
                href="/support"
                className="bg-secondary/50 backdrop-blur-md text-white border border-border px-10 py-5 rounded-2xl font-bold text-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                VIEW FEATURES
                <ChevronRight className="w-5 h-5 opacity-50" />
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-2xl border-t border-border/50 pt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-3xl md:text-5xl font-black text-white mb-1 tabular-nums">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-bold text-primary tracking-widest uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Comparison Section */}
        <FPSCounter />

        {/* Marquee */}
        <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] overflow-hidden border-y border-border/40 bg-card/30 py-6 my-16 backdrop-blur-sm">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="flex gap-12 px-6 items-center">
                {[
                  "STRETCHED RESOLUTION", "HWID RESET", "PING OPTIMIZER", 
                  "FPS BOOSTER", "RIVALS SETTINGS", "WINDOWS TWEAKS", "1-CLICK UNBAN"
                ].map((text, i) => (
                  <React.Fragment key={i}>
                    <span className="text-sm font-black tracking-[0.2em] text-muted-foreground/50 uppercase">{text}</span>
                    <Zap className="w-4 h-4 text-primary opacity-30" />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <section className="py-24" id="features">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">UNFAIR ADVANTAGE.</h2>
              <p className="text-muted-foreground text-lg font-medium">
                Everything you need to squeeze every drop of performance from your machine. 
                Built by players, for players.
              </p>
            </div>
            <div className="bg-primary/10 border border-primary/20 px-6 py-4 rounded-2xl hidden lg:block">
              <span className="text-primary font-bold">LATEST BUILD: v1.3.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-24 h-24" })}
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6 inline-block bg-primary/10 p-3 rounded-2xl">
                    {feature.icon}
                  </div>
                  <div className="text-[10px] font-black text-primary tracking-widest uppercase mb-2">{feature.tag}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Games Support */}
        <section className="py-20 border-t border-border/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">ENGINEERED FOR THE BEST.</h2>
            <p className="text-muted-foreground font-medium">Custom optimization profiles for Roblox's most demanding titles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {games.map((game, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className={`group bg-card border ${game.border} rounded-3xl overflow-hidden transition-all`}
              >
                <div className="relative h-56 overflow-hidden">
                  {gameThumbnails[game.placeId] ? (
                    <img 
                      src={gameThumbnails[game.placeId]} 
                      alt={game.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${game.fallbackGradient} flex items-center justify-center`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-[10px] font-black border px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm ${game.color} border-current/30 tracking-widest uppercase`}>
                      {game.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-3">{game.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">{game.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Discord Banner */}
        <section className="py-12">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[#5865F2]/40 bg-[#5865F2]/5 p-12 md:p-20 text-center"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-3 text-xs font-black bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-2 rounded-full mb-8 tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                {onlineCount ? `${onlineCount.toLocaleString()} MEMBERS ACTIVE` : "COMMUNITY ONLINE"}
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">JOIN THE INNER CIRCLE.</h2>
              <p className="text-muted-foreground max-w-2xl text-lg font-medium mb-12">
                Join {memberCount?.toLocaleString() ?? "10,000+"} elite players. Get early beta access to Lithium v2, 
                share your clips, and dominate the leaderboard.
              </p>

              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#5865F2] hover:bg-[#4752C4] text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_rgba(88,101,242,0.3)]"
              >
                <Users className="w-6 h-6" />
                JOIN DISCORD COMMUNITY
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">STOP LOSING.</h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto font-medium">
              Your hardware is capable of more. Unlock it today with Lithium.
            </p>
            <Link
              href="/download"
              className="inline-flex bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-primary hover:text-white transition-all duration-300"
            >
              DOWNLOAD FOR WINDOWS
            </Link>
          </div>
        </section>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(var(--primary-rgb), 0.5);
        }
        .gradient-text {
          background: linear-gradient(to right, #fff, #ff3e3e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </Layout>
  );
}
