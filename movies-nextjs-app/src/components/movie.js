const Movie = ({ movie }) => (
  <div className="row -mb3">
    <div className="col-1">
      <div className="AspectRatio -br10">
        <img src={`http://localhost:3001${movie.image}`} alt="Movie Thumbnail" />
      </div>
    </div>
    <div className="col-2">
      <h2>{movie.title}</h2>
      <p>{movie.year} &bull; {movie.rating}</p>
      <p>{movie.summary}</p>
    </div>
  </div>
);

export default Movie;
