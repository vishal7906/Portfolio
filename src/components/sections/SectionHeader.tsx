import React from "react";
import { cn } from "../../utils";

export default function SectionHeader({
  title,
  decoration,
  className,
}: {
  title: string;
  decoration: string | React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex font-bold justify-center items-center gap-2 sm:gap-10",
        className
      )}
    >
      <span className="shrink">{decoration}</span>
      <div className="shrink w-9 md:w-20 h-0.5 bg-black"></div>
      <div className="text-4xl sm:text-5xl whitespace-nowrap font-bold">
        {title}
      </div>
      <div className="w-9 md:w-20 shrink h-0.5 bg-black"></div>
      <div className="shrink">{decoration}</div>
    </div>
  );
}
