import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anni Web Solutions | Websites, Automation & Digital Growth" },
      {
        name: "description",
        content: "Explore web solutions, AI automation, and digital marketing services from Anni Web Solutions.",
      },
      { property: "og:title", content: "Anni Web Solutions" },
      {
        property: "og:description",
        content: "Websites, automation, and digital growth solutions for ambitious businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-page-glow px-5 py-10">
      <section className="w-full max-w-[1120px] bg-background px-6 py-20 text-center shadow-[0_22px_60px_var(--shadow-shell)] sm:px-12 sm:py-28">
        <div className="mx-auto flex w-fit items-center gap-3" aria-label="Anni Web Solutions">
          <span className="brand-mark" aria-hidden="true"><i /><i /></span>
          <span className="text-left leading-none">
            <strong className="block font-display text-[34px] font-extrabold text-ink">Anni</strong>
            <small className="mt-1 block text-[9px] font-extrabold text-ink">WEB SOLUTIONS PVT. LTD.</small>
          </span>
        </div>
        <h1 className="mx-auto mt-12 max-w-3xl font-display text-[42px] font-extrabold leading-[1.08] text-ink sm:text-[60px]">
          Digital solutions built for business growth
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-7 text-copy">
          Explore our focused services for websites, automation, and digital growth.
        </p>
        <Button asChild variant="marketing" className="mt-9 h-[54px] px-7 text-[15px] font-semibold">
          <Link to="/digital-marketing">Explore Digital Marketing <ArrowRight /></Link>
        </Button>
      </section>
    </main>
  );
}
