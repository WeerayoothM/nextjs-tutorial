import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths :GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // paths:[{}, {}, {params : {id: }}] each one represent a route
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

//  we run this function ten times because we have 10 items
export const getStaticProps : GetStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
