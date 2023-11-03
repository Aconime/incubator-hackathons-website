"use client";

import { useState } from "react";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import completeAccount from "@/server/completeAccount";
import CoolButton from "@/components/custom/CoolButton";
import Icon from "@/components/shared/Icon";

const CompleteRegistration = () => {
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const result = await completeAccount(username);
      if (result.status === "success") {
      } else {
        console.error("Something went wrong");
      }
    } catch (e) {
      console.error(
        "There was a problem setting up your account. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="username"></label>
        <input
          id="username"
          placeholder="E.g. MyUsername123"
          value={username}
          onChange={(e) => {
            const usernameValue = e.currentTarget.value;

            setUsername(usernameValue);
            if (usernameValue.length > 3) setIsDisabled(false);
            else setIsDisabled(true);
          }}
        />
      </div>

      <CoolButton
        className="w-full gap-2 items-center"
        type="submit"
        isLoading={isLoading}
        disabled={isDisabled}
      >
        {!isLoading && <Icon icon={faUserPlus} />}
        Create Account
      </CoolButton>
    </form>
  );
};

export default CompleteRegistration;
