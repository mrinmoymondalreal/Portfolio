import { MouseEventHandler } from "react";
import { cn } from "../libs/utils";

export function HoverLink({
  href,
  text,
  className,
  onClick,
  target,
}: {
  href: string;
  text: string;
  className?: string;
  onClick?: MouseEventHandler;
  target?: string;
}) {
  return (
    <a
      href={href}
      className={cn("relative overflow-hidden group", className)}
      onClick={onClick}
      target={target}
    >
      <span className="inline-block group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]">
        {text}
      </span>
      <span className="absolute inset-0 translate-y-full group-hover:-translate-y-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]">
        {text}
      </span>
    </a>
  );
}
