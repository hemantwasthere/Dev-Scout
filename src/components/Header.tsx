"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "./ui/button";

const Header: React.FC = () => {
  const session = useSession();

  return (
    <header>
      <div>
        {session.data ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn("google")}>Sign In</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
