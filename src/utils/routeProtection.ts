import { authOptions, getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const redirectGuestUser = async () => {
  const session = await getAuthSession();
  if (!session?.user) redirect(authOptions.pages?.signIn || "/sign-in");
};

export const redirectSignedInUser = async () => {
  const session = await getAuthSession();
  if (session?.user) redirect("/account");
};

export const redirectNewUser = async () => {
  const session = await getAuthSession();
  if (session?.user && session?.user.username === null) redirect("/register");
};
