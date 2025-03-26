// import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
// import localFont from "next/font/local";
// import GoogleAnalytics from "@/app/GoogleAnalytics";
// import Script from "next/script";

// import "./globals.css";
// import StoreProvider from "@/redux/storeProvider";
// import { gsap } from "gsap";
// import { CustomEase } from "gsap/CustomEase";
// gsap.registerPlugin(CustomEase);

// const dM_Sans = DM_Sans({ subsets: ["latin-ext"] });
// const satoshi = localFont({
//   src: "../font/satoshi/Satoshi-Variable.woff2",
//   style: "normal",
// });

// const helvetica = localFont({
//   src: "../font/helvetica/HelveticaNowDisplay-Medium.woff2",
//   style: "normal",
// });

// export const metadata: Metadata = {
//   title: "Advart",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com"></link>
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin=""
//         ></link>
//         <link
//           href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
//           rel="stylesheet"
//         ></link>
//         <meta
//           name="Advart"
//           content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
//         ></meta>
//         <GoogleAnalytics />
//       </head>

//       <body className={helvetica.className}>
//         <StoreProvider>{children}</StoreProvider>
//       </body>
//       <Script src="https://cdn.jsdelivr.net/gh/vipulkumar-dev/gsap@2024/ScrambleTextPlugin.min.js" />
//     </html>
//   );
// }
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Script from "next/script";

import "./globals.css";
import StoreProvider from "@/redux/storeProvider";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

// Google Font
const dM_Sans = DM_Sans({ subsets: ["latin-ext"] });

// Local Fonts
const satoshi = localFont({
  src: "../font/satoshi/Satoshi-Variable.woff2",
  style: "normal",
});
const helvetica = localFont({
  src: "../font/helvetica/HelveticaNowDisplay-Medium.woff2",
  style: "normal",
});

// Metadata (Title & Favicon)
export const metadata: Metadata = {
  title: "Advart",
  icons: {
    icon: "/fav2.svg", // Favicon
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Website Title */}
        <title>Advart</title>

        {/* Meta Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

        {/* Preconnect for Faster Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Font - DM Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics */}
        <GoogleAnalytics />
      </head>

      <body className={helvetica.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>

      {/* GSAP Plugin (Lazy Load for Performance) */}
      <Script src="https://cdn.jsdelivr.net/gh/vipulkumar-dev/gsap@2024/ScrambleTextPlugin.min.js" strategy="lazyOnload" />
    </html>
  );
}
