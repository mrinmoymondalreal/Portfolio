import { Link } from "react-router-dom";
import { HoverLink } from "./hoverlink";

export function MoreProject() {
  return (
    <div className="h-[30vh] z-10 bg-foreground gap-y-4 flex flex-col justify-center items-center text-3xl md:text-6xl font-bold font-glock w-screen">
      More Projects
      <span className="block overflow-hidden px-2 text-2xl bg-[#262626] text-white py-1 font-medium hover:rounded-md transition-all">
        <Link to="/projects">
          <HoverLink href="#" text="See More" />
        </Link>
      </span>
    </div>
  );
}
