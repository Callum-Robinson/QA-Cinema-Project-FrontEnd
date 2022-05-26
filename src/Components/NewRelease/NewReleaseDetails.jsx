import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const NewReleaseDetails = () => {
    const params = useParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <main>
            <h2>New Release Details</h2>

            
        </main>

            )
};

export default NewReleaseDetails;