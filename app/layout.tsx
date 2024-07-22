import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./sass/styles.scss";

const inter = Poppins({ weight: "500", subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
