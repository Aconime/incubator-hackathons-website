"use server";

import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import IDefaultActionsResponse from "@/server/interfaces/IDefaultActionsResponse";
import { revalidatePath } from "next/cache";

export default async function completeAccount(
  username: string
): Promise<IDefaultActionsResponse> {
  const session = await getAuthSession();

  if (username.length >= 3) {
    try {
      const usernameExists = await db.user.findMany({
        where: {
          username: username,
        },
      });

      if (usernameExists.length > 0)
        return {
          status: "failure",
          message:
            "Username already exists, please select a different username.",
        };
      else {
        await db.user.update({
          where: {
            id: session?.user.id,
          },
          data: {
            username,
          },
        });

        revalidatePath("/account");

        return {
          status: "success",
        };
      }
    } catch {
      return {
        status: "failure",
        message: "Something went wrong.",
      };
    }
  } else {
    return {
      status: "failure",
      message: "Username must be more than 3 characters long.",
    };
  }
}
