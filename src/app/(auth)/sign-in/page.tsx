import AuthForm from "@/components/AuthForm";
import { redirectSignedInUser } from "@/utils/routeProtection";

export default async function SignInPage() {
  await redirectSignedInUser();

  return <AuthForm />;
}
