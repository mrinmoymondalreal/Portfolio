import { HoverLink } from "./components/hoverlink";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { atom, setAtom, useAtom, useMediaQuery } from "./libs/utils";

const currentHovering = atom(0);

const projects = new Array(20).fill({
  name: "Project Name",
  year: Math.floor(Math.random() * 3000),
  url: "/videoframe_2775.png",
  link: "http://google.com",
});

function Frame({
  translateX,
  translateY,
  opacity,
}: {
  translateX: MotionValue;
  translateY: MotionValue;
  opacity: MotionValue;
}) {
  const [state] = useAtom(currentHovering);
  const display = useTransform(opacity, [0, 1], ["none", "block"]);
  return (
    <motion.div
      style={{
        translateX,
        translateY,
        opacity,
        display,
      }}
      className="fixed top-0 md:top-[none] rounded-xl overflow-hidden bg-gray-300 md:bg-[none] z-50 md:z-auto h-screen w-screen md:h-auto md:w-auto "
    >
      <div className="md:hidden p-4 relative">
        <span
          className="text-5xl shadow-lg absolute flex justify-center items-center text-foreground rounded-full h-[60px] aspect-square bg-background"
          onClick={() => opacity.set(0)}
        >
          &times;
        </span>
      </div>
      <div className="md:h-[95vh] h-[85vh] md:block flex justify-center items-center overflow-hidden rounded-md">
        <img
          src={projects[state as number].url}
          className="object-contain max-w-full h-full shadow-lg"
          alt=""
        />
      </div>
      <div className="md:hidden text-center py-5 px-8 box-border">
        <a href={projects[state as number].link} target="_black">
          <span className="block py-2 text-foreground rounded-xl h-full w-full bg-background text-xl overflow-hidden">
            Visit Site
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export function ProjectPage() {
  const _translateX = useSpring(0);
  const translateX = useMotionTemplate`${_translateX}px`;

  const _translateY = useSpring(0);
  const translateY = useMotionTemplate`${_translateY}px`;

  const opacity = useSpring(0, { bounce: 0 });
  const opacityEnd = useTransform(opacity, [0, 1], [1, 0]);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="md:flex md:flex-row-reverse min-h-screen md:px-40">
      <div className="flex-[4] h-[60vh] md:h-screen flex justify-center items-center">
        <motion.div
          style={{ opacity: opacityEnd }}
          className="md:fixed text-foreground"
        >
          <div className="font-glock font-bold text-3xl tracking-widest">
            Mrinmoy Mondal
          </div>
          <div className="text-xl">Fullstack Web Developer</div>
          <div className="w-fit h-fit overflow-hidden space-x-2 mt-2">
            <HoverLink
              target="_blank"
              href="https://www.linkedin.com/in/mrinmoy-mondal-319861167/"
              text="Linkedln"
            />
            <HoverLink
              target="_blank"
              href="https://github.com/mrinmoymondalreal"
              text="Github"
            />
            <HoverLink
              target="_blank"
              href="https://x.com/themrinmoyreal"
              text="Twitter"
            />
            <HoverLink
              target="_blank"
              href="https://drive.google.com/file/d/13VJCjJyXje0b9LB3THHF-LlCi26v-ZhC/view?usp=sharing"
              text="Resume"
            />
          </div>
        </motion.div>

        <AnimatePresence>
          <Frame
            translateX={translateX}
            translateY={translateY}
            opacity={opacity}
          />
        </AnimatePresence>
      </div>
      <div className="flex flex-col space-y-4 md:py-44 justify-start flex-1">
        {projects.map(({ name, year }, index) => (
          <motion.div
            key={index}
            onMouseMove={(event) => {
              setAtom(currentHovering)(index);

              if (isDesktop) {
                let target = event.target as HTMLElement;
                if (target.tagName == "SPAN") {
                  target = target.parentElement as HTMLElement;
                }
                let box = target.getBoundingClientRect();
                let x = ((event.clientX - box.left) / box.width) * 100;
                let y = ((event.clientY - box.top) / box.height) * 10;

                _translateY.set(y);
                _translateX.set(x);
              } else {
                _translateX.set(0);
                _translateY.set(0);
              }
            }}
            onHoverStart={() => opacity.set(1)}
            onHoverEnd={() => opacity.set(0)}
            onTap={() => opacity.set(1)}
            className="flex justify-between hover:bg-white hover:text-background text-foreground hover:scale-105 transition-all duration-300 text-[15px] w-full px-4 py-3 rounded-[20px] hover:shadow-[0_10px_20px_2px_rgba(255,255,255,0.08)] backdrop-blur-sm"
          >
            <span className="select-none">{name}</span>

            <span className="select-none text-gray-500">{year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
