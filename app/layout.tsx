import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({variable:"--font-serif",subsets:["latin"],weight:["500","600","700"],style:["normal","italic"]});
const sans = DM_Sans({variable:"--font-sans",subsets:["latin"],weight:["400","500","600","700"]});

export const metadata: Metadata = {
  title:"Handayani Melati Roncean",
  description:"Roncean bunga melati dari Desa Gesik, Blok Kembang untuk pernikahan, lamaran, acara adat, dan berbagai momen spesial.",
  other:{"codex-preview":"development"},
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="id"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>}
