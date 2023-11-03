import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";
import { redirectGuestUser, redirectNewUser } from "@/utils/routeProtection";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Incubator Hackathons - Account",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await redirectGuestUser();
  await redirectNewUser();

  return (
    <html lang="en">
      <body className={cn(roboto.className)}>{children}</body>
    </html>
  );
}
