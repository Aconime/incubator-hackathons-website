import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SignoutButton from "@/components/SignoutButton";
import CoolButton from "@/components/custom/CoolButton";
import Icon from "@/components/shared/Icon";

export default async function HomePage() {
  const session = await getAuthSession();

  return (
    <div>
      <h1>Home Page</h1>
      {session ? (
        <div className={cn("flex flex-row gap-4 items-center")}>
          <CoolButton variant="secondary">
            <Link
              href="/account"
              className={cn("flex flex-row gap-2 items-center")}
            >
              <Icon icon={faTableColumns} /> Account
            </Link>
          </CoolButton>

          <SignoutButton />
        </div>
      ) : (
        <CoolButton>
          <Link href="/sign-in">Sign In</Link>
        </CoolButton>
      )}
    </div>
  );
}
