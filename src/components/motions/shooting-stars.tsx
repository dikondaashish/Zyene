"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback, useId } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const [mounted, setMounted] = useState(false);
  const uniqueId = useId();
  const gradientId = `gradient-${uniqueId.replace(/:/g, "")}`;

  const getRandomStartPoint = useCallback(() => {
    if (typeof window === "undefined") return { x: 0, y: 0, angle: 45 };
    
    const side = Math.floor(Math.random() * 4);
    const width = window.innerWidth;
    const height = window.innerHeight;

    switch (side) {
      case 0: // top
        return { x: Math.random() * width, y: -10, angle: 135 };
      case 1: // right
        return { x: width + 10, y: Math.random() * height, angle: 225 };
      case 2: // bottom
        return { x: Math.random() * width, y: height + 10, angle: 315 };
      case 3: // left
        return { x: -10, y: Math.random() * height, angle: 45 };
      default:
        return { x: 0, y: 0, angle: 45 };
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStars((prev) => [...prev.slice(-5), newStar]); // Keep max 6 stars
    };

    // Create initial star
    createStar();

    // Create new stars at random intervals
    const intervalId = setInterval(() => {
      createStar();
    }, Math.random() * (maxDelay - minDelay) + minDelay);

    return () => clearInterval(intervalId);
  }, [mounted, minDelay, maxDelay, minSpeed, maxSpeed, getRandomStartPoint]);

  useEffect(() => {
    if (!mounted || stars.length === 0) return;

    let animationId: number;

    const animate = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const radians = (star.angle * Math.PI) / 180;
            const newX = star.x + star.speed * Math.cos(radians);
            const newY = star.y + star.speed * Math.sin(radians);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 200;

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter((star) => {
            const width = typeof window !== "undefined" ? window.innerWidth : 1920;
            const height = typeof window !== "undefined" ? window.innerHeight : 1080;
            return star.x >= -100 && star.x <= width + 100 && star.y >= -100 && star.y <= height + 100;
          })
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [mounted, stars.length > 0]);

  if (!mounted) return null;

  return (
    <svg
      className={cn("tw-w-full tw-h-full tw-absolute tw-inset-0 tw-pointer-events-none", className)}
      style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 1 }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={trailColor} stopOpacity={0} />
          <stop offset="100%" stopColor={starColor} stopOpacity={1} />
        </linearGradient>
      </defs>
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill={`url(#${gradientId})`}
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      ))}
    </svg>
  );
};
