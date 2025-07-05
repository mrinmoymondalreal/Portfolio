import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "../libs/utils";

export default function Slide({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.7 start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -50]);
  const tempTranslate = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, 100]);
  const translateY = useMotionTemplate`${tempTranslate}%`;
  let arr = [0, 0.3, 0.6, 1];
  const scale = useTransform(scrollYProgress, arr, [0.8, 1, 1, 0.5]);
  const opacity = useTransform(scrollYProgress, arr, [0.2, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        translateY,
        opacity,
        scale,
        transformOrigin: "center",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

function ProjectWrapper({
  title,
  technology,
  description,
  image,
  url,
}: {
  title?: string;
  technology?: string;
  description?: string;
  image?: string;
  url?: string;
}) {
  return (
    <div className="[-webkit-perspective:1900px;] box-border aspect-square md:w-[700px]">
      <Slide className="sticky top-10 border rounded-xl border-[#676767] bg-[#1e1e1e] aspect-square md:aspect-auto w-[90vw] md:w-full md:h-fit p-1.5">
        <div className="px-7 py-8 project-wrapper-gradient space-y-4 rounded-xl w-full h-full border border-[#1d1d1d] bg-[#262626] transition-all duration-700 relative overflow-hidden group">
          <div className="*:block space-y-2">
            <span className="text-xl font-medium text-white text-glow">
              <a
                className="hover:underline"
                href={url}
                target="_blank"
                rel="noopener noreferrers"
              >
                {title}
                <img
                  className="ml-2 -mt-2 inline-block"
                  src="https://img.icons8.com/?size=15&id=0GU4b5gZ4PdA&format=png&color=FFFFFF"
                />
              </a>
            </span>
            <span className="text-sm font-medium">
              <span className="text-[#acacac]">{description}</span>
              <span className="text-white text-glow block mt-2">
                — {technology}
              </span>
            </span>
          </div>
          <div className="w-[100%] h-fit translate-y-10 overflow-hidden bg-gray-500/10 rounded-md group-hover:translate-y-4 transition-transform flex justify-center">
            <img src={image} alt="" className="object-contain w-full h-full" />
          </div>
        </div>
      </Slide>
    </div>
  );
}

async function fetchProjectData() {
  return await fetch("projects.json").then((response) => response.json());
}

export function ProjectSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "1.33 0"],
  });

  const [data, setData] = useState<
    {
      title: string;
      description: string;
      technology: string;
      image: string;
      url: string;
    }[]
  >([]);

  useEffect(() => {
    fetchProjectData().then((data) => setData(data));
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [36, 720]);

  return (
    <div ref={sectionRef} className="space-y-8 bg-primary" id="project">
      <div className="font-glock text-[#ACBFA4] tracking-wider w-full uppercase text-center py-6 text-6xl md:text-7xl font-bold">
        Projects
      </div>
      <div className="flex justify-evenly">
        <div className="w-fit h-fit sticky top-0 hidden md:block">
          <div className="inline-block pl-12 pt-8">
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="overflow-visible translate-y-1/2"
              width={256}
              height={256}
            >
              <defs>
                <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="50%" stopColor="#f2f2f2" />
                  <stop offset="90%" stopColor="#acbfa4" />
                </linearGradient>
              </defs>
              <filter
                id="strokeGlow"
                y="-100"
                x="-100"
                filterUnits="userSpaceOnUse"
                height="800"
                width="1600"
              >
                <feOffset
                  in="StrokePaint"
                  dx="0"
                  dy="0"
                  result="centeredOffset"
                ></feOffset>

                <feGaussianBlur
                  in="centeredOffset"
                  stdDeviation="0"
                  result="blur1"
                ></feGaussianBlur>
                <feGaussianBlur
                  in="centeredOffset"
                  stdDeviation="1"
                  result="blur2"
                ></feGaussianBlur>
                <feGaussianBlur
                  in="centeredOffset"
                  stdDeviation="15"
                  result="blur3"
                ></feGaussianBlur>

                <feMerge>
                  <feMergeNode in="blur1"></feMergeNode>
                  <feMergeNode in="blur2"></feMergeNode>
                  <feMergeNode in="blur3"></feMergeNode>

                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g rotate={20}>
                  {" "}
                  <motion.path
                    style={{
                      rotate,
                      filter: "url(#strokeGlow)",
                      scale: 3,
                    }}
                    fill="url(#grad)"
                    d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                  ></motion.path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8 [-webkit-perspective:1900px;]">
          {data.map((project, index) => (
            <ProjectWrapper
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technology={project.technology}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
