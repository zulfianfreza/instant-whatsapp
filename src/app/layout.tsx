import Providers from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const monserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Instant WhatsApp",
  description: "Easy way to send WhatsApp without saving the number first",
  icons: "/logo.png",
  openGraph: {
    title: "Instant WhatsApp",
    description: "Easy way to send WhatsApp without saving the number first",
    images: ["/logo.png"],
  },
  twitter: { card: "summary_large_image", images: ["/logo.png"] },
  authors: [
    {
      name: "Julian Reza",
      url: "https://julianreza.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
