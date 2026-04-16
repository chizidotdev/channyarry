import { useRef } from "react";
import { Link } from "react-router";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/all";

import { navItemsLeft, navItemsRight } from "./app-header";
import { AppLogo } from "./app-logo";
import { AnimatedLink } from "./ui/link-animated";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const bgRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hint = hintRef.current;
    const bg = bgRef.current;
    const items = itemsRef.current;
    const navbarLinks = document.querySelectorAll(".navbar-links") as NodeListOf<HTMLElement>;
    const logo = logoRef.current;

    if (!hint || !bg || !items || !logo) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) {
        logo.classList.add("navbar-logo-pinned");
        gsap.set(logo, { width: 250 });
        gsap.set([bg, items], { width: "100%", height: "100dvh" });
        return;
      }

      const vpWidth = window.innerWidth;
      const vpHeight = window.innerHeight;
      const initialWidth = bg.offsetWidth;
      const initialHeight = bg.offsetHeight;
      const initialLinksWidths = Array.from(navbarLinks).map((link) => link.offsetWidth);

      const state = Flip.getState(logo);
      logo.classList.add("navbar-logo-pinned");
      gsap.set(logo, { width: 250 });
      gsap.to(hint, {
        top: `calc(50% + ${initialHeight / 1.87}px)`,
        duration: 1,
        ease: "power2.Out",
      });
      const flip = Flip.from(state, { duration: 1, ease: "none", paused: true });

      const st = ScrollTrigger.create({
        trigger: ".navbar-backdrop",
        start: "top top",
        end: `+=${vpHeight}px`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set([bg, items], {
            width: gsap.utils.interpolate(initialWidth, vpWidth, progress),
            height: gsap.utils.interpolate(initialHeight, vpHeight, progress),
          });

          gsap.set(hint, {
            width: gsap.utils.interpolate(initialWidth, vpWidth, progress),
          });

          navbarLinks.forEach((link, index) => {
            gsap.set(link, {
              width: gsap.utils.interpolate(link.scrollWidth, initialLinksWidths[index], progress),
            });
          });

          flip.progress(progress);
        },
      });

      return () => {
        st.kill();
        logo.classList.remove("navbar-logo-pinned");
      };
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile logic
      const logo = logoRef.current;
      if (logo) {
        logo.classList.add("navbar-logo-pinned");
        gsap.set(logo, { width: 250 });
        gsap.set([bg, items], { width: "100%", height: "100dvh" });
      }
    });

    return () => mm.revert();
  });

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
        <div ref={hintRef} className="navbar-hint">
          <span>scroll down</span>
          <span className="dot" />
          <span>scroll down</span>
          <span className="dot" />
          <span>scroll down</span>
          <span className="dot" />
          <span>scroll down</span>
          <span className="dot" />
          <span>scroll down</span>
          <span className="dot" />
          <span>scroll down</span>
          <span className="dot" />
          <span>scroll down</span>
          <span className="dot" />
          <span>scroll down</span>
          <span className="dot" />
          <span>scroll down</span>
          <span className="dot" />
        </div>
        <div ref={bgRef} className="navbar-background" />
      </div>

      <div ref={itemsRef} className="navbar-items">
        <div className="navbar-links">
          {navItemsLeft.map(({ name, href }) => (
            <AnimatedLink key={name} to={href}>
              {name}
            </AnimatedLink>
          ))}
        </div>
        <div className="navbar-links">
          {navItemsRight.map(({ name, href }) => (
            <AnimatedLink key={name} to={href}>
              {name}
            </AnimatedLink>
          ))}
        </div>

        <div ref={logoRef} className="navbar-logo">
          <Link to="/" reloadDocument>
            <AppLogo className="size-full" />
          </Link>
        </div>
      </div>
    </section>
  );
}
