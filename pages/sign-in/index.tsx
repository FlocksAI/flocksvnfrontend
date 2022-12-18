import React from "react";
import dynamic from "next/dynamic";

const SignInIndex = dynamic(() => import("../../lib/sign-in"), { ssr: false });

const SignInPage = () => {
  return (
    <>
      <SignInIndex />
    </>
  );
};

export default SignInPage;
