import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nalu Component",
  description:
    "A modern, customizable React table component with built-in themes, pagination, and advanced features. Perfect for creating beautiful and functional data tables in your React applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
