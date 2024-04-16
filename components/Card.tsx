import { Movie } from "./MoviesList";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

type CardProps = {
  movie: Movie;
};
const Card = ({ movie }: CardProps) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={500}
          height={300}
          className="rounded-t-lg mx-auto group-hover:opacity-75 transition-opacity"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-base">{movie.overview}</p>
          <h2 className="text-lg font-bold truncate">{movie.title}</h2>
          <p className="flex items-center">
            {movie.release_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
