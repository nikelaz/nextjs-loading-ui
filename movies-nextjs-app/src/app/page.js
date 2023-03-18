import Movie from '../components/movie';

const getData = async () => {
  const res = await fetch('http://localhost:3001/movies');

  if (!res.ok) {
    throw new Error('Failed to retrieve movies');
  }

  return res.json();
};

const Home = async () => {
  const data = await getData();

  return (
    <>
      { data.movies.map((movie) => <Movie key={movie.id} movie={movie} />) }
    </>
  )
};

export default Home;
