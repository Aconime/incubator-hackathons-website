"use client";

import { useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";
import CoolButton from "@/components/custom/CoolButton";
import Icon from "@/components/shared/Icon";
import { cn } from "@/lib/utils";

const googleAuthButtonStyle =
  "gap-2 items-center w-full hover:bg-slate-800 hover:text-white";

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (provider: string) => {
    setIsLoading(true);

    try {
      await signIn(provider);
    } catch {
      console.error(
        "Failed to authenticate your google account. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("p-4 flex flex-col gap-2")}>
      <CoolButton
        className={cn(googleAuthButtonStyle)}
        onClick={() => handleLogin("google")}
        isLoading={isLoading}
      >
        {!isLoading && <Icon icon={faGoogle} />}
        Sign In with Google
      </CoolButton>
    </div>
  );
};

export default AuthForm;
