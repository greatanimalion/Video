import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "@/components/Nav";
import '@wangeditor/editor/dist/css/style.css'
export const metadata: Metadata = {
  description: "虚拟世界",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <body style={{ maxWidth: "1400px", minWidth: '900px', margin: "10px auto", paddingTop: "70px" }}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
