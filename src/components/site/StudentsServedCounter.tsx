import { useEffect, useRef, useState } from "react";

/** Update this number as students are served. */
export const STUDENTS_SERVED = 0;

export function StudentsServedCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;
        const target = STUDENTS_SERVED;
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft md:p-16">
      <p className="font-display text-6xl font-bold tabular-nums text-health md:text-8xl">
        {value.toLocaleString()}
      </p>
      <p className="mt-4 text-lg font-semibold md:text-xl">Students Served</p>
    </div>
  );
}
