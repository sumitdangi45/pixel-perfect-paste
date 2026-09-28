import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  CircleUserRound,
  Clock3,
  Crosshair,
  Megaphone,
  Play,
  ShoppingCart,
  Sparkles,
  Star,
  UsersRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import marketingProfessional from "@/assets/marketing-professional.png";
import socialMediaService from "@/assets/social-media-service.jpg";
import videoEditingService from "@/assets/video-editing-service.jpg";
import clientPatel from "@/assets/client-patel.jpg";
import clientJoshi from "@/assets/client-joshi.jpg";
import clientGupta from "@/assets/client-gupta.jpg";

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

const services = [
  {
    title: "Video Shooting & Professional Editing",
    description: "High-quality brand video shoots, cinematic product shoots, trending reel editing, color grading, sound design, and short-form content production.",
    image: videoEditingService,
    imageAlt: "Professional video editor working with cinematic footage",
    points: [
      "Professional product and brand video shoots with studio-grade lighting and camera gear.",
      "Cinematic video editing, Instagram Reels and YouTube Shorts, transitions, and color grading.",
      "High-engagement video scripts, voiceover integration, and sound design tailored for viral reach.",
    ],
  },
  {
    title: "Social Media Management & Account Handling",
    description: "Complete end-to-end management of your social media profiles. We handle monthly content planning, graphic post creation, scheduling, caption writing, and active audience engagement.",
    image: socialMediaService,
    imageAlt: "Social media manager planning a content calendar",
    points: [
      "Full account management across Instagram, Facebook, LinkedIn, YouTube, and X.",
      "Monthly content calendars, custom graphic post designs, carousel infographics, and copywriting.",
      "Active community management, direct-message responses, hashtag strategy, and growth analytics.",
    ],
  },
];

const reviews = [
  {
    tag: "Performance Ads & Landing Funnels",
    metric: "+65% Enrolment Rate",
    quote:
      "Anni completely revamped our ad creatives, copywriting, and sales landing page. Our cost per student website signup dropped by 65% while course enrolment rates skyrocketed.",
    name: "Kaushik Joshi",
    role: "Founder, SkillsEdge Academy",
    avatar: clientJoshi,
  },
  {
    tag: "Social Media & Video Reels",
    metric: "+380% Admission Leads",
    quote:
      "Anni Web Solution managed our complete social media handling, produced high-quality promotional video reels, and ran targeted digital ad campaigns for Sarvadnya Vidyapeeth. Their strategy resulted in a tremendous surge in student admissions.",
    name: "Dr. Bhuleshwar Patel",
    role: "Founder & Chairman, Sarvadnya Vidyapeeth",
    avatar: clientPatel,
  },
  {
    tag: "Instagram Growth & Reel Production",
    metric: "6K+ New Followers",
    quote:
      "Anni Solution handled our complete Instagram channel management, edited engaging educational video reels, and grew our organic followers from 2,000 to 8,000+. The viral reels converted.",
    name: "Dr. M. N. Gupta",
    role: "Founder & MD, Vidyasagar Classes",
    avatar: clientGupta,
  },
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

        <section className="marketing-catalog bg-background px-6 pb-20 pt-14 sm:px-10 lg:px-14 lg:pb-28 lg:pt-20">
          <div className="mx-auto max-w-[1080px] text-center">
            <span className="inline-flex rounded-full bg-accent px-5 py-2 text-[13px] font-bold text-primary">Our Marketing Catalog</span>
            <h2 className="mt-5 font-display text-[36px] font-extrabold leading-tight text-ink sm:text-[46px]">
              Explore Our <span className="text-primary">Marketing Solutions</span>
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-[1080px] space-y-24 lg:mt-20 lg:space-y-28">
            {services.map((service, index) => (
              <article key={service.title} className="service-row grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
                <div className={`service-image-frame ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-display text-[28px] font-extrabold leading-[1.18] text-ink sm:text-[32px]">{service.title}</h3>
                  <p className="mt-5 text-[16px] leading-[1.55] text-copy">{service.description}</p>
                  <ol className="mt-7 space-y-4">
                    {service.points.map((point, pointIndex) => (
                      <li key={point} className="flex items-start gap-3 text-[14px] leading-[1.4] text-copy">
                        <span className="service-number">{String(pointIndex + 1).padStart(2, "0")}</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ol>
                  <Button asChild variant="marketing" className="mt-8 h-12 px-6 text-[14px] font-semibold">
                    <a href="mailto:hello@anniweb.com">Enquire Now <ArrowRight className="h-4 w-4" /></a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
