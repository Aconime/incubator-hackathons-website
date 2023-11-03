"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import CoolButton from "@/components/custom/CoolButton";
import Icon from "@/components/shared/Icon";

const SignoutButton = () => {
  return (
    <CoolButton
      className={cn("flex flex-row gap-2 items-center")}
      onClick={() => signOut()}
    >
      <Icon icon={faArrowRightFromBracket} /> Sign Out
    </CoolButton>
  );
};

export default SignoutButton;
