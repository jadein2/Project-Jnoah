import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jnoah OS · Urban Strong Fitness",
  description:
    "Gym system access for Urban Strong Fitness Olongapo and Restart Fitness PH — coaching roster, programs, and business targets.",
  icons: {
    icon: [
      { url: "/logos/urban-strong-fitness.png", type: "image/png" },
    ],
    apple: "/logos/urban-strong-fitness.png",
    shortcut: "/logos/urban-strong-fitness.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
