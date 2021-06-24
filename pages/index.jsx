import Head from "next/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          dolores suscipit molestiae sapiente eum vero, sequi delectus nobis
          deserunt laudantium veniam cupiditate placeat ut, impedit at fugiat
          obcaecati neque? Illum!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          dolores suscipit molestiae sapiente eum vero, sequi delectus nobis
          deserunt laudantium veniam cupiditate placeat ut, impedit at fugiat
          obcaecati neque? Illum!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjs Listing</a>
        </Link>
      </div>
    </>
  );
}
