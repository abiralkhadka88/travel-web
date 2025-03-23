import TourDetailClient from "./TourDetailClient";

export function generateStaticParams() {
  const slugs = [
    "majestic-bhutan-tour",
    "annapurna-base-camp",
    "chisapani-hike",
    "everest-high-pass",
    "gokyo-lakes",
    "day-trip-heli-tours-to-everest",
  ];
  return slugs.map((slug) => ({ slug }));
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TourDetailClient slug={slug} />;
}
