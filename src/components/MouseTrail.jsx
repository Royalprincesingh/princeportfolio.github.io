import React, { useEffect, useRef } from "react";

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let points = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      points.push({
        x: e.clientX,
        y: e.clientY,
        radius: 6,
        alpha: 0.8
      });
      if (points.length > 25) {
        points.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.alpha *= 0.92;
        point.radius = Math.max(1, point.radius * 0.96);

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${point.alpha})`;
        ctx.shadowColor = "rgba(0, 210, 255, 0.6)";
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      points = points.filter((p) => p.alpha > 0.02);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999
      }}
    />
  );
};

export default MouseTrail;
