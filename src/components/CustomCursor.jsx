import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isHidden, setIsHidden] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(pointer: coarse)").matches;
    }
    return true;
  });

  useEffect(() => {
    // Disable custom cursor for touchscreens / devices without mouse pointers
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      if (dotRef.current && ringRef.current) {
        const { clientX: x, clientY: y } = e;
        
        // Instant position for the inner dot
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;
        
        // Delayed trailing ring position (controlled via CSS transform transition)
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      // Mark that mouse has moved to fade in the cursor at coordinates
      setHasMoved((prev) => {
        if (!prev) return true;
        return prev;
      });
    };

    const onMouseOver = (e) => {
      const isInput =
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.tagName === "SELECT" ||
        e.target.closest("input") ||
        e.target.closest("textarea");

      if (isInput) {
        setIsInputHovered(true);
      } else {
        setIsInputHovered(false);
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.closest("a") ||
          e.target.closest("button") ||
          e.target.classList.contains("clickable")
        ) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      }
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const onMouseEnter = () => {
      setIsHidden(false);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Hide default cursor across the document
    document.documentElement.classList.add("cursor-none");

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Core Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out ${
          !hasMoved || isInputHovered ? "opacity-0" : "opacity-100"
        } ${isHovered ? "scale-[2.5] bg-white" : ""}`}
        style={{
          transitionProperty: "transform, opacity",
          transitionDuration: "100ms, 150ms"
        }}
      />
      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-accent/65 transition-all duration-300 ease-out ${
          !hasMoved || isInputHovered ? "opacity-0" : "opacity-100"
        } ${
          isHovered
            ? "w-14 h-14 bg-accent/15 border-white scale-110"
            : "w-8 h-8"
        }`}
        style={{
          transitionProperty: "width, height, background-color, border-color, transform, opacity",
          transitionDuration: "300ms, 300ms, 300ms, 300ms, 75ms, 150ms"
        }}
      />
    </>
  );
}
