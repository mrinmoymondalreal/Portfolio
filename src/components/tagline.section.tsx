import { motion } from "framer-motion";

const stacks = [
  "Javascript",
  "HTML",
  "CSS",
  "GSAP",
  "ReactJS",
  "TailwindCSS",
  "Next.JS",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Framer Motion",
];

export function TagLineSection() {
  return (
    <div className="h-screen flex justify-center items-center bg-primary">
      <div className="text-5xl md:text-4xl font-bold text-[#acbfa4] space-y-8">
        <div className="*:block space-y-1 px-6 md:px-0">
          <span>
            I craft{" "}
            <span className="text-gradient font-glock italic">
              stories&nbsp;&nbsp;
            </span>
            with
          </span>
          <span className="">code &nbsp;</span>
        </div>
        <div className="space-y-4 text-2xl md:text-3xl px-6 md:px-0">
          <div className="text-4xl">my digital tool box</div>
          <div>
            <ul className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
              {stacks.map((e, i) => (
                <motion.li
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  key={i}
                  transition={{
                    delay: 0.05 * i,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {e}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
