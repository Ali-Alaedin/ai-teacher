/**
 * Web App Manifest: lets people install Buddy AI on their phone
 * or computer like a normal app (home-screen icon, own window).
 * Served by Next.js at /manifest.webmanifest
 */
export default function manifest() {
  return {
    name: "Buddy AI – Your AI Language Teacher",
    short_name: "Buddy AI",
    description: "Practise a new language by talking to an AI teacher that understands your own books and notes.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#F4F4F5",
    theme_color: "#0EA5E9",
    categories: ["education"],
    icons: [
      { src: "/icons/192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/512", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
