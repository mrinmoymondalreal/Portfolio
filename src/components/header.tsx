import { HoverLink } from "./hoverlink";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{
        delay: 0.5,
        type: "spring",
        bounce: 0,
      }}
      className="px-4 py-4 md:px-32 md:py-7 z-50 sticky top-0 flex justify-center md:justify-between text-xl w-full text-[#ACBFA4] bg-[#262626] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 "
    >
      <div id="logo" className="font-semibold flex-1">
        Mrinmoy Mondal <span className="align-super">©</span>
      </div>
      <div id="links" className="hidden md:flex justify-center">
        <ul className="flex justify-center items-center w-fit gap-x-4">
          <HoverLink href="#home" text="Home" />
          <HoverLink href="#aboutme" text="About" />
          <HoverLink href="#project" text="Projects" />
          <HoverLink
            href="#contact"
            text="Contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, document.body.scrollHeight);
            }}
          />
        </ul>
      </div>
      <div className="md:hidden w-fit flex items-center border px-2 rounded-md bg-[#ACBFA4] text-[#262626]">
        <HoverLink
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, document.body.scrollHeight);
          }}
          href="#contact"
          text="Contact"
        />
      </div>
    </motion.div>
  );
}
