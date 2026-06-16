import { redirect } from "next/navigation";

export default async function LegacyPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/columnas/${slug}`);
}
