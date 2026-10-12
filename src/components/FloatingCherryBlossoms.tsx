import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  color: string;
}

export const FloatingCherryBlossoms: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color palette based on theme
    const lightPalette = [
      'rgba(255, 183, 197, 0.75)', // Sakura pink
      'rgba(255, 192, 203, 0.70)', // Light pink
      'rgba(254, 205, 211, 0.75)', // Rose petal
      'rgba(253, 164, 175, 0.65)', // Deep blush
      'rgba(255, 240, 245, 0.85)', // Pale ivory petal
      'rgba(212, 175, 55, 0.35)',  // Subtle golden pollen
    ];

    const darkPalette = [
      'rgba(255, 182, 193, 0.45)',
      'rgba(244, 114, 182, 0.40)',
      'rgba(212, 175, 55, 0.40)', // Warm gold
      'rgba(249, 168, 37, 0.30)',
      'rgba(255, 223, 186, 0.35)',
    ];

    const palette = isDark ? darkPalette : lightPalette;
    const petalCount = width < 768 ? 18 : 32;

    const createPetal = (startY?: number): Petal => ({
      x: Math.random() * width,
      y: startY !== undefined ? startY : Math.random() * height,
      size: Math.random() * 8 + 8,
      speedY: Math.random() * 1.0 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      flip: Math.random() * Math.PI,
      flipSpeed: Math.random() * 0.03 + 0.01,
      opacity: Math.random() * 0.4 + 0.4,
      color: palette[Math.floor(Math.random() * palette.length)],
    });

    const petals: Petal[] = Array.from({ length: petalCount }, () => createPetal());

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(1, Math.sin(p.flip));

      ctx.fillStyle = p.color;
      ctx.beginPath();
      // Curved cherry blossom petal shape (with characteristic notched tip)
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.8, p.size * 0.7, p.size * 0.3, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.3, -p.size * 0.6, -p.size * 0.8, 0, -p.size);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.008) * 0.5;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden select-none">
      {/* Falling Cherry Blossom Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
