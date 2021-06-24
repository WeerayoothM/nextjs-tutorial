import Link from "next/link";
import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";

const NotFound = () => {
  const router:NextRouter = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(-1);
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops! ...</h1>
      <h2>That page connot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Home page</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
