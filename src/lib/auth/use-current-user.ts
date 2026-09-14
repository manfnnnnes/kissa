import { useMemo } from "react";
import { authClient } from "./client";
import { authEnabled, DEV_USER } from "./config";

export type CurrentUser = {
  id: string;
  displayName: string | null;
  primaryEmail: string | null;
  profileImageUrl: string | null;
};

type CurrentUserState = {
  user: CurrentUser | null;
  isPending: boolean;
};

export function useCurrentUserState(): CurrentUserState {
  const session = authClient.useSession();
  const fallback = useMemo(
    () => ({
      user: authEnabled
        ? session.data?.user
          ? {
              id: session.data.user.id,
              displayName: session.data.user.name ?? null,
              primaryEmail: session.data.user.email ?? null,
              profileImageUrl: session.data.user.image ?? null,
            }
          : null
        : DEV_USER,
      isPending: authEnabled ? session.isPending : false,
    }),
    [session.data?.user, session.isPending],
  );
  return fallback;
}
