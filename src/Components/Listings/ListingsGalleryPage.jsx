import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";


const ListingsGalleryPage = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const mapMovieImages = (movie) => {
        return (
            <div key={movie.title}>
                <Link to={`/listingsgallery/${movie.id}`}>
                    <img id="movie-poster" src={movie.image} alt="movie poster" />
                </Link>
                <h3 id="movie-listing-title">{movie.title}</h3>
            </div>
        )
    }

    useEffect(() => {
        fetch(`http://localhost:5000/movie`)
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
    }, []);

    if (loading) return <main><h1>Loading movies...</h1></main>
    else if (error) return <main><h1>Error loading movies...</h1></main>

    else return (
        <main>
            <h2>Listings Gallery</h2>
            {data.map(movie => mapMovieImages(movie))}
            <Outlet />            
        </main>

            );
};

export default ListingsGalleryPage;