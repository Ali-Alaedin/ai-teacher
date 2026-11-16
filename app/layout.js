import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buddy AI – Your AI Language Teacher",
  description: "Practise a new language by talking to an AI teacher that understands your own books and notes. Powered by Gemini.",
  applicationName: "Buddy AI",
  appleWebApp: {
    capable: true,
    title: "Buddy AI",
    statusBarStyle: "default",
  },
};

export const viewport = {
  themeColor: "#0EA5E9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning verhindert Hydrierungsfehler durch Browser-Extensions */}
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}