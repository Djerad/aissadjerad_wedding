import { useEffect, useState } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function computeTimeLeft(targetISO: string): TimeLeft {
  const diff = new Date(targetISO).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, done: false };
}

export function useCountdown(targetISO: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState(() => computeTimeLeft(targetISO));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(computeTimeLeft(targetISO)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return timeLeft;
}
