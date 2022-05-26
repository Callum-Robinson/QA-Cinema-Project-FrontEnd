import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const NewReleaseDetails = () => {
    const params = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const mapNewReleaseDetails = (release) => {
        const base64Poster = `data:${release.poster.contentType};base64, ${release.poster.data}`;
        return (
            <div key={release.title}>
                <h2>{release.title}</h2>
                <img id="new-release-poster" src={base64Poster} alt="new release poster" width="250"/>
                <p><strong>Genre:</strong> {release.genre}</p>
                <p><strong>Description:</strong> {release.description}</p>
                <p><strong>Actors:</strong> {release.actors}</p>
                <p><strong>Directors:</strong> {release.directors}</p>
                <p><strong>Release Date:</strong> {release.releaseDate}</p>
                <p><strong>Runtime(minutes):</strong> {release.runtime}</p>
            </div>
        )
    }

    useEffect(() => {
        fetch(`http://localhost:5000/newrelease/${params.releaseId}`)
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
    }, [params.releaseId]);

    if (loading) return <main><h1>Loading new release details...</h1></main>
    else if (error) return <main><h1>Error loading release details...</h1></main>
    else return (
        <main>
            {mapNewReleaseDetails(data)}
        </main>
            );
};

export default NewReleaseDetails;