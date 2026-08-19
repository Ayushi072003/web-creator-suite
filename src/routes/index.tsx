import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VOLT | Gear Up. Play Hard." },
      {
        name: "description",
        content:
          "VOLT sports gear store — shop performance footwear, apparel and equipment built for athletes who play hard.",
      },
      { property: "og:title", content: "VOLT | Gear Up. Play Hard." },
      {
        property: "og:description",
        content:
          "Shop VOLT performance sports gear: footwear, apparel and equipment for athletes who play hard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/website/index.html"
      title="VOLT storefront"
      className="h-screen w-screen border-0"
    />
  );
}
