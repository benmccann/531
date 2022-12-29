import { writable } from 'svelte/store';

export const darkMode = writable(true);

export const deadlifts = writable(0.0);
export const squats = writable(0.0);
export const benchpress = writable(0.0);
export const overheadpress = writable(0.0);

export const countdown = writable(2.0);
export const timer = writable(120);

export const displayTimer = (time: number): string => {
  const minutes = Math.floor(time / 60).toString();
  const seconds = time % 60 === 0 ? '00' : (time % 60).toString();

  return `${minutes}:${seconds}`;
};
