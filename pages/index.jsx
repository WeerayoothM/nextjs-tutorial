import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolores
        suscipit molestiae sapiente eum vero, sequi delectus nobis deserunt
        laudantium veniam cupiditate placeat ut, impedit at fugiat obcaecati
        neque? Illum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolores
        suscipit molestiae sapiente eum vero, sequi delectus nobis deserunt
        laudantium veniam cupiditate placeat ut, impedit at fugiat obcaecati
        neque? Illum!
      </p>
      <Link href="/ninjas">
        <a>See Ninjs Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
