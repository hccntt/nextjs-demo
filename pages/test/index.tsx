import { InferGetStaticPropsType } from 'next';

type Data = {
  message: string;
  result: {
    id: string;
    films: string;
    people: string;
    planets: string;
    species: string;
    vehicles: string;
  };
};

export const getStaticProps = async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const res = await fetch('https://www.swapi.tech/api/');
  const swapis: Data = await res.json();

  return {
    props: {
      swapis,
    },
  };
};

const FilmList = ({ swapis }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h2>List of Films</h2>
      {Object.entries(swapis.result).map(([key, value]) => (
        <ul key={key}>
          <li>{value}</li>
        </ul>
      ))}
    </>
  );
};

export default FilmList;