import { cn } from "@/lib/utils";
import { SectionWrapperProps } from "@/types";

export function SectionWrapper({ 
  children, 
  bgColor, 
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full section-padding",
        bgColor === "dark" ? "bg-primary-dark text-white" : "bg-primary-light text-black",
        className
      )}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
}