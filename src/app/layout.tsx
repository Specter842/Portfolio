import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Specter842",
  description:
    "Computational Systems Engineer building secure, intelligent systems across cybersecurity, blockchain, and robotics.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <ScrollProgressBar />
            <Nav />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
