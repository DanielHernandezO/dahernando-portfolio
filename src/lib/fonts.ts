import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Space Grotesk — display / brand face (self-hosted variable font)
export const spaceGrotesk = localFont({
  src: "../../public/fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});
