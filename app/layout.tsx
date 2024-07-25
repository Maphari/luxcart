import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import LOGO from "@/public/svg/logo.svg"
import "./sass/styles.sass";

const inter = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Luxcart",
  description: "luxcart gives you quality products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={LOGO.src} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
