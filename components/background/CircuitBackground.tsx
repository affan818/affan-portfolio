"use client";

import { useEffect, useRef } from "react";

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const GRID = 120;
    const nodes: { x: number; y: number }[] = [];

    for (let x = GRID; x < width; x += GRID) {
      for (let y = GRID; y < height; y += GRID) {
        if (Math.random() > 0.6) {
          nodes.push({ x, y });
        }
      }
    }

    function drawCircuit() {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(59,130,246,0.6)";
      ctx.fillStyle = "#3b82f6";

      nodes.forEach((node) => {
        const dir = Math.floor(Math.random() * 4);

        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(node.x, node.y);

        let x = node.x;
        let y = node.y;

        const length = GRID * (Math.floor(Math.random() * 3) + 1);

        if (dir === 0) x += length;
        if (dir === 1) x -= length;
        if (dir === 2) y += length;
        if (dir === 3) y -= length;

        ctx.lineTo(x, y);
        ctx.stroke();
      });
    }

    function animate() {
      drawCircuit();
      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50"
    />
  );
}
