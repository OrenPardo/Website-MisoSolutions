import { splineSans, fragmentMono } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Adaline — The Single Platform for LLMs",
  description:
    "The single platform to iterate, evaluate, deploy, and monitor LLMs. Built for world-class product and engineering teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${splineSans.variable} ${fragmentMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
