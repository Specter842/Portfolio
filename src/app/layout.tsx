import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { SuppressViewTransitionErrors } from "@/components/suppress-view-transition-errors";

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
    "Computational Systems Engineer focused on AI/ML, robotics, and cybersecurity, building intelligent pipelines across finance, blockchain, IoT, and autonomous systems with end-to-end ownership from data to secure decentralized infrastructure.",
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
            <SuppressViewTransitionErrors />
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
