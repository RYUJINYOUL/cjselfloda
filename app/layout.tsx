import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import ClientLayout from "@/components/ClientLayout";
import FabButton from '@/components/ui/FabButton';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "충청 미니추레라",

  icons: {
		icon: "/Image/mainmiddle.jpeg",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="ko"
     suppressHydrationWarning>
        <Head>
          <meta name="naver-site-verification" content="c86800ab7df395e4ca9853b414f8c5c1404ac8e9" />
          <meta name="google-site-verification" content="6dJD4pGhO6YPIICZcyWGjhw54bczFf5ZRIQgip8wzYA" />
       </Head>
      <body className={inter.className}>
      <ClientLayout>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
            <FabButton />
        </ClientLayout>
          </body>
    </html>
  );
}
