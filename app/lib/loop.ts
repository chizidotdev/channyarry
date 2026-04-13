import { gsap } from "gsap";

interface MarqueeConfig {
  speed?: number; // Pixels per second
  paused?: boolean;
}

export function createMarquee(
  items: gsap.TweenTarget,
  config: MarqueeConfig = {}
): gsap.core.Timeline {
  const elements = gsap.utils.toArray(items) as HTMLElement[];
  const pixelsPerSecond = (config.speed || 1) * 100;

  // 1. Set initial layout to prevent flicker
  gsap.set(elements, { xPercent: 0 });

  const tl = gsap.timeline({
    repeat: -1,
    paused: config.paused,
    defaults: { ease: "none" },
  });

  // 2. Calculate the total width of all items
  const totalWidth = elements.reduce((acc, el) => acc + el.offsetWidth, 0);

  // 3. Move items
  // We move everything by -100% (the total width)
  // This ensures a perfectly seamless loop without accumulation errors
  tl.to(elements, {
    xPercent: -100,
    duration: totalWidth / pixelsPerSecond,
  });

  return tl;
}
