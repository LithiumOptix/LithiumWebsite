import { useEffect, useRef } from "react";

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number;
      y: number;
      life: number;
      size: number;
      vx: number;
      vy: number;
    };
    const particles: Particle[] = [];

    const onMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          life: 1,
          size: Math.random() * 3 + 1.5,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.3,
        });
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.04;
        p.x += p.vx;
        p.y += p.vy;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const radius = p.size * p.life;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
        grad.addColorStop(0, `rgba(147, 210, 204, ${p.life * 0.9})`);
        grad.addColorStop(1, `rgba(147, 210, 204, 0)`);

        ctx.save();
        ctx.fillStyle = grad;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#93D2CC";
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
    />
  );
}
