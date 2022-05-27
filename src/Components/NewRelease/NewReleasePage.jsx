import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";



const NewReleasePage = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const mapNewReleaseImages = (release) => {
        const base64Poster = `data:${release.poster.contentType};base64, ${release.poster.data}`;
        return (
            <div key={release.title}>
                <Link to={`/newreleases/${release._id}`}>
                    <img id="release-poster" src={base64Poster} alt="new release poster" width="250"/>
                </Link>
            </div>
        )
    }

    useEffect(() => {
        fetch(`http://localhost:5000/newrelease`)
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

    if (loading) return <main><h1>Loading new releases...</h1></main>
    else if (error) return <main><h1>Error loading movies...</h1></main>
    else return (
        <main>
            <h2>New Releases</h2>
            <div class="listings-gallery">
                {data.map(release => mapNewReleaseImages(release))}
            </div>
            <Outlet />
        </main>

            );
};

export default NewReleasePage;