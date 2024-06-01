import { DM_Sans } from "next/font/google";
import "./globals.css";

const DmFont = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "AnimeApp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${DmFont.className} bg-[#0f1117] text-white font-["DM_Sans", sans-serif]`}
      >
        {children}
      </body>
    </html>
  );
}
