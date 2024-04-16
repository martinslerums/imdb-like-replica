import MoviesList from "@/components/MoviesList";
import { BsDatabase } from "react-icons/bs";

type SearchPageProps = {
  params: {
    searchTerm: string
  }
}

const SearchPage = async ({params}: SearchPageProps) => {

  const searchTerm = params.searchTerm;
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
  const data = await response.json()

  const movies = data.results;
  console.log("Searched movies ", data)

  return (
    <div>
      {
        movies && movies.length === 0 ? (
          <h1 className="text-center pt-6">
            No movies found
          </h1>
        ) : (
          movies && <MoviesList movies={movies} /> 
        )
      }
    </div>
  )
}

export default SearchPage