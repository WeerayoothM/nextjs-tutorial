import Link from "next/link";

const NotFound = () => {
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