import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* Image from next is automatically lazily load */}
        <Image src="/logo.png" alt="Logo" width={126} height={77} />
      </div>
      {/*//? Linking between pages we don't have the anchor tag, use something else instead */}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
