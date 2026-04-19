import { useEffect, useRef, useState } from "react";
import { forwardRef } from "react";
import { Link } from "react-router";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";

import { navItemsLeft, navItemsRight } from "./app-header";
import { AppLogo } from "./app-logo";
import { AnimatedLink } from "./ui/link-animated";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const navbarLinksRefs = useRef<HTMLDivElement[]>([]);

  const [isDesktop, setIsDesktop] = useState(false);
  const [initialDims, setInitialDims] = useState<{
    width: number;
    height: number;
    linkWidths: number[];
    hintTop: number;
  } | null>(null);

  // Capture initial dimensions after mount (before any scroll)
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
    };

    handleChange(mql);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isDesktop || !bgRef.current) return;

    const bg = bgRef.current;
    const linkWidths = navbarLinksRefs.current.map((el) => el?.offsetWidth ?? 0);
    const bgHeight = bg.offsetHeight;

    setInitialDims({
      width: bg.offsetWidth,
      height: bgHeight,
      linkWidths,
      // matches GSAP: `top: calc(50% + initialHeight / 1.87px)`
      hintTop: window.innerHeight * 0.5 + bgHeight / 1.87,
    });
  }, [isDesktop]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // scroll distance = 1 viewport height (same as GSAP `end: +=${vpHeight}px`)
    offset: ["start start", "end start"],
  });

  // --- Expanding bg/items dimensions ---
  const bgWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [initialDims?.width ?? 0, typeof window !== "undefined" ? window.innerWidth : 1920]
  );
  const bgHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [initialDims?.height ?? 0, typeof window !== "undefined" ? window.innerHeight : 1080]
  );

  // --- Hint top position ---

  // --- Hint width tracks bg width ---
  const hintWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [initialDims?.width ?? 0, typeof window !== "undefined" ? window.innerWidth : 1920]
  );

  return (
    <section ref={containerRef}>
      <div className="navbar-backdrop">
        <div className="navbar-img">
          <video
            src="https://www.pexels.com/download/video/30031456"
            poster="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1740&auto=format&fit=crop"
            className="size-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="https://www.pexels.com/download/video/30031456" type="video/mp4" />
          </video>
        </div>

        <motion.div
          ref={hintRef}
          className="navbar-hint"
          style={
            isDesktop && initialDims ? { top: initialDims.hintTop, width: hintWidth } : undefined
          }
        >
          {Array.from({ length: 9 }).flatMap((_, i) => [
            <span key={`text-${i}`}>scroll down</span>,
            <span key={`dot-${i}`} className="dot" />,
          ])}
        </motion.div>

        <motion.div
          ref={bgRef}
          className="navbar-background"
          style={
            isDesktop && initialDims
              ? { width: bgWidth, height: bgHeight }
              : { width: "100%", height: "100dvh" }
          }
        />
      </div>

      {/* Expanding items container */}
      <motion.div
        ref={itemsRef}
        className="navbar-items"
        style={
          isDesktop && initialDims
            ? { width: bgWidth, height: bgHeight }
            : { width: "100%", height: "100dvh" }
        }
      >
        {/* Left nav links */}
        <NavLinkGroup
          items={navItemsLeft}
          initialWidth={initialDims?.linkWidths[0]}
          scrollYProgress={scrollYProgress}
          isDesktop={isDesktop}
          ref={(el) => {
            if (el) navbarLinksRefs.current[0] = el;
          }}
        />

        {/* Right nav links */}
        <NavLinkGroup
          items={navItemsRight}
          initialWidth={initialDims?.linkWidths[1]}
          scrollYProgress={scrollYProgress}
          isDesktop={isDesktop}
          ref={(el) => {
            if (el) navbarLinksRefs.current[1] = el;
          }}
        />

        {/*
          Hero logo — shares layoutId with the pinned navbar logo.
          When this unmounts (on scroll), Motion animates it
          into the navbar logo's position automatically.
        */}
        <AnimatePresence>
          {!isDesktop || !initialDims ? (
            <motion.div layoutId="app-logo" className="navbar-logo" style={{ width: 250 }}>
              <Link to="/" reloadDocument>
                <AppLogo className="size-full" />
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>

      {/*
        Pinned navbar logo — always mounted on desktop.
        Shares layoutId so Motion transitions from the hero logo position.
      */}
      {isDesktop && (
        <motion.div
          layoutId="app-logo"
          className="navbar-logo navbar-logo-pinned"
          style={{ width: 250 }}
        >
          <Link to="/" reloadDocument>
            <AppLogo className="size-full" />
          </Link>
        </motion.div>
      )}
    </section>
  );
}

const NavLinkGroup = forwardRef<
  HTMLDivElement,
  {
    items: { name: string; href: string }[];
    initialWidth: number | undefined;
    scrollYProgress: MotionValue<number>;
    isDesktop: boolean;
  }
>(({ items, initialWidth, scrollYProgress, isDesktop }, ref) => {
  // Links shrink from their scrollWidth down to their initial collapsed width
  // (mirrors GSAP: interpolate(link.scrollWidth, initialLinksWidths[index], progress))
  const expandedWidth = items.reduce((acc, item) => acc + item.name.length * 10 + 32, 0);

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [expandedWidth, initialWidth ?? expandedWidth]
  );

  return (
    <motion.div
      ref={ref}
      className="navbar-links"
      style={isDesktop && initialWidth ? { width } : undefined}
    >
      {items.map(({ name, href }) => (
        <AnimatedLink key={name} to={href}>
          {name}
        </AnimatedLink>
      ))}
    </motion.div>
  );
});

NavLinkGroup.displayName = "NavLinkGroup";
