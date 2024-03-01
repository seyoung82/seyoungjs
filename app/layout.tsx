import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/src/component/Footer";
import Top from "@/src/component/Top";

export const metadata: Metadata = {
  title: "Web Tutorials",
  description: "::seyoung::",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Top/>
        <h2><a href="/">WEB</a></h2>
        <ol>
          <li><a href="/road/1">html</a></li>
          <li><a href="/road/2">CSS </a></li>
        </ol>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
