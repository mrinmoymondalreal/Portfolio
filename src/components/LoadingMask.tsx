import { AnimatePresence, motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function LoadingMask() {
  const springConfig = {
    bounce: 0,
    duration: 1100,
  };
  const rx = useSpring(100, springConfig);
  const ry = useSpring(10, springConfig);
  const cx = useSpring(50, springConfig);
  const cy = useSpring(120, springConfig);

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.body.style.overflow = "hidden";
    rx.set(100);
    ry.set(100);
    cy.set(60);
    const unsubscribe = cy.on("change", () => {
      if (rx.get() == 100) {
        // document.body.style.overflow = "auto";
      }
    });
    return () => unsubscribe && unsubscribe();
  });

  return (
    <AnimatePresence>
      <motion.section
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{
          delay: 1.1,
          duration: 0.1,
        }}
        className="fixed h-screen w-screen z-[99] top-0 inset-0"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <motion.mask id="myMask">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <motion.ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
          </motion.mask>
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="black"
            mask="url(#myMask)"
          />
        </motion.svg>
      </motion.section>
    </AnimatePresence>
  );
}
