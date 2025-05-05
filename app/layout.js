import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit_san = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo_san = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio",
  description: "Gp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit_san.className} ${ovo_san.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
