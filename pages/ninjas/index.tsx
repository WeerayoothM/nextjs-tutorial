import { GetStaticProps,NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

// this function runs at build time as our app is built and our components rendered
// don't white the code that expect to run in the browser here
export const getStaticProps : GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return { props: { ninjas: data } };
};

interface Props{
  ninjas:any
}

const Ninjas :NextPage<Props> = ({ninjas}) => {
  return (
    <>
      <Head>
        <title>Ninja List | NinjasList</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
