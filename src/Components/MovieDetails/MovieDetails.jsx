import React from "react";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
    const params = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const mapMovieDetails = (movie) => {
        return (
            <div key={movie.title}>
                <h2>{movie.title}</h2>
                <img id="movie-poster" src={movie.poster} alt="movie poster" />
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Description:</strong> {movie.description}</p>
                <p><strong>Actors:</strong> {movie.actors}</p>
                <p><strong>Directors:</strong> {movie.directors}</p>
                <p><strong>Release year:</strong> {movie.releaseYear}</p>
                <p><strong>Runtime:</strong> {movie.runtime}</p>
            </div>
        )
    }

    return (
        <main>
            <h2>Movie Details</h2>

            
        </main>

            )
};

export default MovieDetails;