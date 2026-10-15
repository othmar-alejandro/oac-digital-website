import { useEffect, useRef } from "react";

/** Scroll reveals: each .oa-rv (or phone-only .oa-mrv) inside the returned ref gets .oa-in once, the first time it enters the viewport. */
export function useReveal<T extends HTMLElement>() {
  const root = useRef<T>(null);

  useEffect(() => {
    const els = root.current?.querySelectorAll(".oa-rv, .oa-mrv") ?? [];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("oa-in");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -12% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return root;
}
