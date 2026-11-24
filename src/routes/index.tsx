import { createFileRoute } from "@tanstack/react-router";
import { TMTilingSite } from "@/components/tm-tiling-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TM Tiling Specialists | Tiling & Home Renovations in Cape Town" },
      {
        name: "description",
        content:
          "TM Tiling Specialists: professional tiling, bathroom and kitchen renovations, flooring, painting, paving and waterproofing in Cape Town. Request a free quotation on WhatsApp.",
      },
      { property: "og:title", content: "TM Tiling Specialists | Tiling & Home Renovations in Cape Town" },
      {
        property: "og:description",
        content:
          "Professional tiling and home renovation services in Cape Town. Request a free quotation from TM Tiling Specialists on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <TMTilingSite />;
}
