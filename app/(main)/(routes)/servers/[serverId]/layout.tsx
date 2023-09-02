import { redirectToSignIn } from "@clerk/nextjs";
import { currentProfile } from "@/lib/current-profile";

import React from "react";
import { db } from "@/lib/db";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }
  const server = await db.server.findUnique({
    where: { id: params.serverId },
  });
  return <div>{children}</div>;
};

export default ServerIdLayout;
