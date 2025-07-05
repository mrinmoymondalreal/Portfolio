import { HoverLink } from "./hoverlink";

export function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-[60vh] -z-[0] sticky bottom-0 bg-[#1d1d1d] px-6 md:px-12 py-8 text-[#ACBFA4] flex flex-col  justify-evenly md:justify-between"
    >
      <div className="text-5xl md:text-6xl font-bold w-full text-center">
        Get in Touch
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="flex-1 flex flex-col justify-end">
          <div>© {new Date().getFullYear()} Mrinmoy Mondal</div>
          <div>All rights reserved.</div>
        </div>
        <div className="text-2xl md:text-3xl font-semibold pb-6 space-y-4">
          <div className="flex flex-col">
            <span className="text-white">Message</span>
            <span className="text-xl md:text-3xl">
              mrinmoymondalreal@gmail.com
            </span>
          </div>
          <div>
            <div className="text-white">Social</div>
            <div className="flex md:justify-center flex-wrap items-center w-fit gap-x-4">
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
                href="https://drive.google.com/file/d/1AUpPRLocLJNIcLtQPYDgwcSAr52PQ4fB/view?usp=sharing"
                text="Resume"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
