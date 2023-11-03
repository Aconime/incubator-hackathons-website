import CompleteRegistration from "@/components/CompleteRegistration";
import { getAuthSession } from "@/lib/auth";
import { redirectGuestUser } from "@/utils/routeProtection";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  await redirectGuestUser();

  const session = await getAuthSession();
  if (session?.user.username !== null) redirect("/account");

  return <CompleteRegistration />;
}
