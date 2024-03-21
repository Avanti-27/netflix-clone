import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-3">
      <img src={POSTER_URL + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
