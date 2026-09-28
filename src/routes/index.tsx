import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anni Web Solutions" },
      {
        name: "description",
        content: "Anni Web Solutions — websites, automation, and digital growth.",
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
  return <main className="min-h-screen" />;
}
