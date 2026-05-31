import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const isVisible = useRef(false);
  const isHovered = useRef(false);
  const isHidden = useRef(false);

  useEffect(() => {
    // Only enable on desktop screens with fine pointer capability
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;

      if (!isVisible.current) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        isVisible.current = true;
      }

      // Check hover target elements
      const target = e.target;
      if (target) {
        const interactive = target.closest("a, button, [role='button'], .cursor-pointer");
        const formInput = target.closest("input, textarea, select, iframe");

        if (formInput) {
          isHidden.current = true;
          dot.style.opacity = "0";
          ring.style.opacity = "0";
        } else {
          isHidden.current = false;
          dot.style.opacity = "1";
          ring.style.opacity = "1";

          if (interactive) {
            isHovered.current = true;
            ring.classList.add("cursor-hover");
            dot.classList.add("cursor-hover-dot");
          } else {
            isHovered.current = false;
            ring.classList.remove("cursor-hover");
            dot.classList.remove("cursor-hover-dot");
          }
        }
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isVisible.current = false;
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      isVisible.current = true;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let animationFrameId;
    const render = () => {
      // Interpolation logic for smooth trailing lag
      const easing = 0.15;
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * easing;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * easing;

      // Update inner dot position instantly
      dot.style.transform = `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0)`;
      // Update outer ring position with easing lag
      ring.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0)`;

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          margin-top: -4px;
          background-color: #22c55e; /* Green accent */
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          transition: opacity 0.3s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease;
        }
        .custom-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          margin-left: -18px;
          margin-top: -18px;
          border: 1.5px solid rgba(34, 197, 94, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          opacity: 0;
          transition: opacity 0.3s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
        }
        /* Hover states */
        .custom-ring.cursor-hover {
          width: 52px;
          height: 52px;
          margin-left: -26px;
          margin-top: -26px;
          border-color: rgba(34, 197, 94, 0.8);
          background-color: rgba(34, 197, 94, 0.05);
        }
        .custom-dot.cursor-hover-dot {
          width: 4px;
          height: 4px;
          margin-left: -2px;
          margin-top: -2px;
        }
      `}} />
      <div ref={dotRef} className="custom-dot hidden md:block" />
      <div ref={ringRef} className="custom-ring hidden md:block" />
    </>
  );
}
