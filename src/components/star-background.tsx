import React, { useEffect, useRef } from "react";

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    const stars: { x: number; y: number; radius: number; vx: number; vy: number; opacity: number }[] = [];
    const comets: { x: number; y: number; length: number; speed: number; angle: number; opacity: number }[] = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
        opacity: Math.random()
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        ctx.closePath();

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.05;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 1) star.opacity = 1;

        // Slow movement
        star.x += star.vx * 0.005;
        star.y += star.vy * 0.005;

        // Wrap around
        if (star.x < 0 || star.x > width) star.vx = -star.vx;
        if (star.y < 0 || star.y > height) star.vy = -star.vy;
      });

      // Handle comets
      if (Math.random() < 0.01 && comets.length < 3) {
        comets.push({
          x: Math.random() * width,
          y: -50,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 5 + 5,
          angle: Math.PI / 4,
          opacity: 1
        });
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const comet = comets[i];
        
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x - Math.cos(comet.angle) * comet.length, comet.y - Math.sin(comet.angle) * comet.length);
        ctx.strokeStyle = `rgba(147, 210, 204, ${comet.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        comet.x += Math.cos(comet.angle) * comet.speed;
        comet.y += Math.sin(comet.angle) * comet.speed;
        comet.opacity -= 0.005;

        if (comet.opacity <= 0 || comet.x > width || comet.y > height) {
          comets.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(drawStars);
    };

    drawStars();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
}
