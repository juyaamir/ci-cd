import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relay — CI/CD that moves you forward",
  description:
    "A clear, reliable CI/CD workflow from the first commit to production.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
