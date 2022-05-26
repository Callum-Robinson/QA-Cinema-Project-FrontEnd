import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";



const NewReleasePage = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    return (
        <main>
            <h2>New Releases</h2>
            
        </main>

            )
};

export default NewReleasePage;