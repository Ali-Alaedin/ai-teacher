/**
 * App icon used for the home-screen / installed app icon (PWA).
 * Same robot as the setup screen mascot, without animation,
 * on a solid background so it looks good as a phone icon.
 */
import { ImageResponse } from "next/og";

export const ICON_BG = "#EEF2FF";

const ROBOT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
<line x1="40" y1="4" x2="40" y2="16" stroke="#6366F1" stroke-width="3" stroke-linecap="round"/>
<circle cx="40" cy="4" r="4" fill="#A5B4FC"/>
<rect x="12" y="16" width="56" height="48" rx="10" fill="#6366F1"/>
<circle cx="30" cy="36" r="10" fill="white"/><circle cx="50" cy="36" r="10" fill="white"/>
<circle cx="30" cy="36" r="5" fill="#4338CA"/><circle cx="50" cy="36" r="5" fill="#4338CA"/>
<rect x="26" y="52" width="28" height="6" rx="3" fill="#A5B4FC"/>
<rect x="4" y="28" width="8" height="16" rx="4" fill="#4F46E5"/>
<rect x="68" y="28" width="8" height="16" rx="4" fill="#4F46E5"/>
</svg>`;

const ROBOT_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(ROBOT_SVG).toString("base64")}`;

/**
 * Renders the icon as a PNG at the given size.
 * The robot fills ~62% of the square so it stays inside the
 * "safe zone" when Android crops the icon into a circle (maskable).
 */
export function renderAppIcon(size) {
  const robot = Math.round(size * 0.62);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: ICON_BG }}>
        <img src={ROBOT_DATA_URI} width={robot} height={robot} alt="" />
      </div>
    ),
    { width: size, height: size }
  );
}
