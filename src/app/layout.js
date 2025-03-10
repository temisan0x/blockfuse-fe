import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased min-h-screen `}>
        <main className="mx-auto w-full py-10 flex flex-col items-center">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
