import { useRef } from "react";
import { Link } from "react-router";

import gsap from "gsap";

export function AnimatedLink(props: React.ComponentProps<typeof Link>) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  function scramble() {
    if (!linkRef.current || gsap.isTweening(linkRef.current)) return;

    gsap.to(linkRef.current, {
      duration: 0.6,
      scrambleText: {
        text: linkRef.current.textContent || "",
        chars: "arry",
        revealDelay: 0.1,
      },
      // ease: "power2.inOut",
    });
  }

  return <Link reloadDocument onMouseEnter={scramble} ref={linkRef} {...props} />;
}
