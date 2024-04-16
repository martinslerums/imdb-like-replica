import MoviesList from "@/components/MoviesList";

const API_KEY = process.env.API_KEY;

type HomeProps = {
  searchParams: {
    genre?: string;
  };
};

const fetchMovies = async (genre: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/movie/week"
    }?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch movie data");
  }

  return data.results;
};

const Home = async ({ searchParams }: HomeProps) => {
  const genre = searchParams.genre || "fetchTrending";

  const results = await fetchMovies(genre);

  console.log(results)

  return (
    <div>
      <MoviesList movies={results} />
    </div>
  );
};

export default Home;
