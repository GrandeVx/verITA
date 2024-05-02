import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider cookies={cookies().toString()}>
            <TooltipProvider>
              <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                  <Link
                    href="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                  >
                    <Users2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="/products"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <Package className="h-5 w-5" />
                        <span className="sr-only">Products</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Products</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <LineChart className="h-5 w-5" />
                        <span className="sr-only">Analytics</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Analytics</TooltipContent>
                  </Tooltip>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        <Settings className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                  </Tooltip>
                </nav>
              </aside>

              {children}
              <Toaster />
            </TooltipProvider>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}