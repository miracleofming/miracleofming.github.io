import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "밍지",
  description: "밍지가 만드는 앱과 작업을 모아 둔 곳",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full font-sans">
        <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
          {children}
        </div>
      </body>
    </html>
  );
}
