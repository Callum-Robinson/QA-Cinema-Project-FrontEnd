import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        fetch(`http://localhost:5000/movie/${params.movieId}`)
            .then(response => {
                if (response.ok) return response.json();
                throw response;
            })
            .then(data => setData(data))
            .catch(error => {
                console.error(error);
                setError(error)
            })
            .finally(() => setLoading(false))
    }, [params.movieId]);

    if (loading) return <main><h1>Loading movie details...</h1></main>
    else if (error) return <main><h1>Error loading movie details...</h1></main>
    else return (
        <main>
            {data.map(movie => mapMovieDetails(movie))}
        </main>
            );
};

export default MovieDetails;