import SignoutButton from "@/components/SignoutButton";
import { getAuthSession } from "@/lib/auth";

export default async function AccountPage() {
  const session = await getAuthSession();

  return (
    <div>
      <p>Logged In User: {session?.user.username}</p>
      <SignoutButton />
    </div>
  );
}
