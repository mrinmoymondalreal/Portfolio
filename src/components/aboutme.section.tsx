import { motion, useScroll, useTransform } from "framer-motion";
import myImage from "/my_image.jpeg";
import { useRef } from "react";

export function AboutMeSection() {
  const fadeOutTransitionVarient = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <div
      className="flex flex-col md:grid md:grid-cols-2 bg-primary min-h-screen py-12 text-[#ACBFA4]"
      id="aboutme"
      ref={ref}
    >
      <motion.div
        viewport={{ once: true }}
        className="uppercase w-full  font-glock col-span-2 text-center py-6 text-6xl md:text-8xl font-bold overflow-hidden"
      >
        {"About".split("").map((e, i) => (
          <motion.span
            viewport={{ once: true }}
            variants={fadeOutTransitionVarient}
            initial="initial"
            whileInView="animate"
            key={i}
            transition={{
              delay: 0.09 * i,
            }}
            className="inline-block"
          >
            {e}
          </motion.span>
        ))}{" "}
        {"Me".split("").map((e, i) => (
          <motion.span
            viewport={{ once: true }}
            variants={fadeOutTransitionVarient}
            initial="initial"
            whileInView="animate"
            key={i}
            transition={{
              delay: 0.09 * (i + 4),
            }}
            className="inline-block"
          >
            {e}
          </motion.span>
        ))}
      </motion.div>
      <div className="sticky top-4 md:p-4 md:pl-12 w-screen md:w-full">
        <motion.div
          style={{ scaleX }}
          className="image md:rounded-xl shadow-sm shadow-slate-50/10 w-full h-fit aspect-square md:h-[900px] bg-slate-400 origin-top overflow-hidden"
        >
          <motion.img
            src={myImage}
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{
              bounce: 0,
            }}
            style={{
              scale,
            }}
            className="object-cover saturate-50"
          />
        </motion.div>
      </div>
      <div className="block *:block text-xl h-fit px-8 py-6 pb-12 space-y-8 md:sticky md:top-0">
        <motion.span
          viewport={{ once: true }}
          variants={fadeOutTransitionVarient}
          initial="initial"
          whileInView="animate"
          className="text-2xl md:text-4xl font-bold"
        >
          A brief Intro, who i am?
        </motion.span>
        <motion.span
          viewport={{ once: true }}
          variants={fadeOutTransitionVarient}
          initial="initial"
          whileInView="animate"
        >
          I am a passionate software developer with expertise in building
          dynamic and user-friendly web applications. Skilled in both frontend
          and backend technologies, I specialize in React, Next.js, Express,
          MongoDB, and PostgreSQL, with additional experience in React Native
          and UI frameworks like TailwindCSS.
        </motion.span>
        <motion.span
          viewport={{ once: true }}
          variants={fadeOutTransitionVarient}
          initial="initial"
          whileInView="animate"
        >
          I thrive on creating tailored solutions for emerging startups and
          small businesses that make an impact, inspire, and connect with
          people. My goal is to deliver seamless and innovative digital
          experiences that align with the vision of growing enterprises.
          Currently pursuing a BTech in Computer Science and Engineering (CSE)
          from DSCSITSC, I am actively seeking opportunities as a MERN stack
          developer to contribute meaningfully to tech-forward ventures.
        </motion.span>
      </div>
    </div>
  );
}
