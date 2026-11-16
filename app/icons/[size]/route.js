/**
 * Serves the PWA icons as PNG: /icons/192 and /icons/512
 */
import { renderAppIcon } from "@/lib/appIcon";

const SIZES = ["192", "512"];

export const dynamic = "force-static";

export function generateStaticParams() {
  return SIZES.map(size => ({ size }));
}

export async function GET(_req, { params }) {
  const { size } = await params;
  if (!SIZES.includes(size)) return new Response("Not found", { status: 404 });
  return renderAppIcon(Number(size));
}
