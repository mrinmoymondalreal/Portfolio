import "./App.css";
import { AboutMeSection } from "./components/aboutme.section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { LoadingMask } from "./components/LoadingMask";
import { MoreProject } from "./components/moreporjects";
import { ProjectSection } from "./components/project.section";
import { TagLineSection } from "./components/tagline.section";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-spotlight" id="home">
        <Header />
        <div className="flex justify-center items-center flex-1 text-[#f2f2f2]">
          <div className="*:text-center -mt-12 md:mt-0 z-10 flex flex-col items-center text-6xl max-w-screen md:text-9xl bg-transparent font-bold space-y-6 uppercase">
            <motion.span
              transition={{ delay: 0.5 }}
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
            >
              Hey, I'M&nbsp;
              <span className="block md:inline">Mrinmoy</span>
            </motion.span>
            <motion.span
              className="text-gradient"
              transition={{ delay: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              I'M Fullstack
            </motion.span>
            <motion.span
              transition={{ delay: 0.5 }}
              initial={{ y: "-120%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Web&nbsp;
              <span className="block md:inline">Developer</span>
            </motion.span>
          </div>
        </div>
      </div>
      <LoadingMask />
      <AboutMeSection />
      <ProjectSection />
      <MoreProject />
      <TagLineSection />
      <Footer />
    </>
  );
}

export default App;
