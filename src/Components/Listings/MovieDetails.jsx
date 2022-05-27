import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
    const params = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const mapTimes = (item) => {
        return (
            <li>{item}</li>
        )
    }

    const mapScreenings = (timing) => {
        return (
            <li key={timing.screeningDay}>
                <p><strong>{timing.screeningDay}</strong></p>
                <ul>
                    {timing.screeningTimes.map(item => mapTimes(item))}
                </ul>
            </li>
        )
    }

    const mapMovieDetails = (movie) => {
        const base64Poster = `data:${movie.poster.contentType};base64, ${movie.poster.data}`;
        return (
            <div key={movie.title}>
                <h2>{movie.title}</h2>
                <img id="movie-poster" src={base64Poster} alt="movie poster" width="250"/>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Classification:</strong> {movie.classification}</p>
                <p><strong>Description:</strong> {movie.description}</p>
                <p><strong>Actors:</strong> {movie.actors}</p>
                <p><strong>Directors:</strong> {movie.directors}</p>
                <p><strong>Release year:</strong> {movie.releaseYear}</p>
                <p><strong>Runtime(minutes):</strong> {movie.runtime}</p>
                <p><strong>Viewing times:</strong></p>
                <ul>
                    {movie.timings.map(timing => mapScreenings(timing))}
                </ul>
            </div>
        )
    }

    useEffect(() => {
        fetch(`http://localhost:5000/movie/${params.movieId}`)
            .then(response => {
                if (response.ok) return response.json();
                throw response;
            })
            .then(data => {
                setData(data);
                console.log(data);
            })
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
            {mapMovieDetails(data)}
        </main>
            );
};

export default MovieDetails;