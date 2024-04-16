import { Movie } from "@/components/MoviesList";
import Image from "next/image";

// const fetchMovie = async (id: string) => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
//   );
//   const data = await response.json();

//   return data.results
// };

const MoviePage = async ({ params: { id } }) => {
  const movieID = id;
  // const movie: Movie = await fetchMovie(movieID);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`
  );
  const movie: Movie = await response.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-7xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title} </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Release Date:</span>
            {movie.release_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
