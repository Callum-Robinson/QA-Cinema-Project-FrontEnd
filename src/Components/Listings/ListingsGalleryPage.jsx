import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";


function ListingsGalleryPage(props) {

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





    return (
        <main>
            <h2>Listings Gallery</h2>

            
        </main>

            )
};

export default ListingsGalleryPage;