import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate | Gateway to Literacy" },
      { name: "description", content: "Donate to Gateway to Literacy through Zeffy." },
      { property: "og:title", content: "Donate | Gateway to Literacy" },
      { property: "og:description", content: "Donate to Gateway to Literacy through Zeffy." },
    ],
  }),
  component: Donate,
});

const ZEFFY_FORM = "donate-to-change-lives-19709";

function Donate() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.zeffy.com/embed/v2/zeffy-embed.js";
    script.async = true;
    script.onerror = () => {
      document.querySelectorAll<HTMLElement>("[data-zeffy-embed-fallback]").forEach((el) => {
        el.style.display = "block";
        el.querySelectorAll<HTMLIFrameElement>("iframe[data-zeffy-embed-src]").forEach((f) => {
          f.src = f.getAttribute("data-zeffy-embed-src") ?? "";
        });
      });
    };
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div>
      <section className="bg-health text-on-accent">
        <div className="container-page py-20 md:py-24">
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">Donate</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-border bg-card p-2 shadow-lift sm:p-6">
          <div data-zeffy-embed data-form-url={`/embed/donation-form/${ZEFFY_FORM}`} />
          <div data-zeffy-embed-fallback style={{ display: "none" }}>
            <div className="relative h-[600px] w-full overflow-hidden sm:h-[520px]">
              <iframe
                title="Donation form powered by Zeffy"
                className="absolute inset-0 h-full w-full border-0"
                data-zeffy-embed-src={`https://www.zeffy.com/embed/donation-form/${ZEFFY_FORM}`}
                allowTransparency
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
