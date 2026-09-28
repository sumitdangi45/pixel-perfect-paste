import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CircleUserRound,
  Clock3,
  Crosshair,
  Play,
  ShoppingCart,
  Star,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import marketingProfessional from "@/assets/marketing-professional.png";

export const Route = createFileRoute("/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing That Grows Your Business | Anni" },
      {
        name: "description",
        content: "Result-driven digital marketing strategies that increase visibility, attract the right audience, and turn clicks into customers.",
      },
      { property: "og:title", content: "Grow Your Business in the Digital World | Anni" },
      {
        property: "og:description",
        content: "Strategic digital marketing built for more traffic, better leads, higher conversions, and a stronger brand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


const benefits = [
  { icon: BarChart3, label: "More Traffic" },
  { icon: UsersRound, label: "Better Leads" },
  { icon: Crosshair, label: "Higher Conversions" },
  { icon: Star, label: "Stronger Brand" },
];

const stats = [
  { icon: UsersRound, value: "100+", label: "Happy Clients" },
  { icon: BarChart3, value: "200+", label: "Campaigns Run" },
  { icon: Star, value: "4.9/5", label: "Client Satisfaction" },
  { icon: Clock3, value: "On-Time", label: "Delivery" },
];

function Index() {
  return (
    <main className="min-h-screen bg-page-glow px-3 py-4 sm:px-5 sm:py-5">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[20px] bg-background shadow-[0_22px_60px_var(--shadow-shell)]">

        <section id="top" className="hero-stage relative min-h-[640px] overflow-hidden px-6 pb-5 pt-16 sm:px-11 lg:min-h-[638px] lg:px-12 lg:pt-[78px]">
          <div className="relative z-20 max-w-[680px]">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-accent px-5 py-2.5 text-[15px] font-semibold text-primary">
              <BarChart3 className="h-5 w-5" /> Digital Marketing
            </div>
            <h1 className="font-display text-[43px] font-extrabold leading-[1.06] text-ink sm:text-[58px] lg:text-[64px]">
              Grow Your Business<br />
              <span className="text-primary">in the Digital World</span>
            </h1>
            <p className="mt-6 max-w-[650px] text-[17px] leading-[1.55] text-copy sm:text-[19px]">
              Result-driven digital marketing strategies to increase your brand<br className="hidden sm:block" />
              visibility, attract the right audience, and turn clicks into customers. <br className="hidden sm:block" />
              Let&apos;s grow your business together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="marketing" className="h-[54px] px-7 text-[15px] font-semibold sm:min-w-[265px]">
                <a href="mailto:hello@anniweb.com">Get a Free Consultation <ArrowRight /></a>
              </Button>
              <Button asChild variant="marketingOutline" className="h-[54px] px-7 text-[15px] font-semibold sm:min-w-[245px]">
                <a href="#results"><Play className="h-6 w-6 fill-transparent" /> Watch How It Works</a>
              </Button>
            </div>
          </div>

          <div className="visual-stage" aria-label="Digital marketing performance illustration">
            <span className="blob blob-one" /><span className="blob blob-two" />
            <img src={marketingProfessional} alt="Digital marketer working on a laptop" width={1280} height={1280} className="person-image" />

            <div className="metric-card traffic-card">
              <span>Website Traffic</span><strong>125K <em>↑ 62%</em></strong>
              <svg viewBox="0 0 110 38" aria-hidden="true"><path d="M2 31 C18 30 19 16 32 16 C45 16 47 28 60 25 C73 23 76 8 88 9 C98 9 102 3 108 2" /></svg>
            </div>
            <div className="metric-card leads-card">
              <CircleUserRound /><span>Leads</span><strong>3.4K</strong><em>↑ 48%</em>
            </div>
            <div className="metric-card sales-card">
              <ShoppingCart /><span>Sales</span><strong>₹ 8.2L</strong><em>↑ 73%</em>
            </div>
            <div className="social-card" aria-label="Marketing channels">
              <b className="instagram">◎</b><b className="facebook">f</b><b className="linkedin">in</b><b className="youtube">▶</b><b className="ads">▲</b>
            </div>
            <div className="quote-card">“ <span>Real Strategy 💥<br />Real Results 🚀</span></div>
            <div className="scribble strategy-note">Your<br />Growth<br />Our Strategy <b>↘</b></div>
            <div className="scribble tomorrow-note">Marketing<br />Today<br />Better Business<br />Tomorrow <b>↙</b></div>
          </div>

          <div className="relative z-20 mt-16 flex flex-wrap gap-x-8 gap-y-4 sm:mt-14 lg:mt-[64px]">
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-[14px] font-medium text-copy">
                <Icon className="h-7 w-7 text-primary" fill="currentColor" strokeWidth={1.8} /> {label}
              </div>
            ))}
          </div>
        </section>

        <section id="results" className="bg-background px-5 py-7 sm:px-10">
          <div className="grid rounded-[18px] bg-stats px-5 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div key={label} className={`flex items-center justify-center gap-5 py-3 ${index > 0 ? "stat-divider" : ""}`}>
                <Icon className="h-12 w-12 text-primary" strokeWidth={2.2} />
                <div><strong className="block font-display text-[25px] font-extrabold text-ink">{value}</strong><span className="text-[14px] text-copy">{label}</span></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
