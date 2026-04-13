import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/all";
import { type LenisRef, ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, Flip, SplitText, ScrambleTextPlugin);
export function GSAPProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    });

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {children}
    </>
  );
}
