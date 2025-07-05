export function ProfessionalExperience() {
  return (
    <div
      id="professional-experience"
      className="h-fit z-10 p-6 md:p-10 bg-foreground gap-y-4 flex flex-col justify-center items-center"
    >
      <div className="text-4xl md:text-5xl font-bold font-glock">
        Professional Experience
      </div>
      <div className="mt-5">
        <div className="flex flex-col text-center justify-center gap-2">
          <div className="text-2xl md:text-3xl font-bold font-glock">
            Software Developer Intern at EasyReferral
          </div>
          <div className="text-lg md:text-xl font-glock font-bold text-black/70">
            (Mar 2025 - June 2025)
          </div>
          <div className="text-xl font-bold font-glock text-black/70 text-center max-w-[600px]">
            Developed responsive UIs with React, integrated APIs (with axios),
            managed state, and collaborated using Git, GitHub, Figma, and React
            hooks. Also handled backend tasks with Node.js and Nestjs,
          </div>
        </div>
      </div>
    </div>
  );
}
