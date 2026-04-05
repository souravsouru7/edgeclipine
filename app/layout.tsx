import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Edgeclipine | AI Trading Journal & Behavior Analysis",
  description: "Edgeclipine is the first AI trading journal that tracks your behavior, not just your P&L. Get instant AI feedback on emotional decisions.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Edgeclipine",
    startupImage: "/logo.png",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P59XY9TV3J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P59XY9TV3J');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
