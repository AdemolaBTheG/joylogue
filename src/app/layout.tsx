import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800", "900"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Joylogue — Never lose your next game",
  description: "Save games the moment you find them. Play, finish, rate, and compare your backlog with friends.",
  icons: { icon: "/joylogue/icon-symbol.png" },
  openGraph: { title: "Joylogue — Never lose your next game", description: "The gaming backlog built to help you decide what to play next.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
