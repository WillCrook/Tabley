
import React, { useEffect, useState, useRef } from 'react';

const MouseGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);

      // Clear existing timeout to prevent fading while moving
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      // Set new timeout to fade out after 2 seconds of stillness
      fadeTimeoutRef.current = setTimeout(() => {
        setOpacity(0);
      }, 2000);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-1000 ease-out"
      style={{
        opacity,
        background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.09), transparent 80%)`,
      }}
    />
  );
};

export default MouseGlow;
