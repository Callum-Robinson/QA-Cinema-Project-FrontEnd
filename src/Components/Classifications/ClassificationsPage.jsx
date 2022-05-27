import React from "react";
import ClassificationsInfo from "./ClassificationsInfo";
import ClassificationsRules from "./ClassificationsRules";
import ClassificationsLinks from "./ClassificationsLinks";

const ClassificationsPage = () => {
    return (
        <main>
            <div id="classifications">
                <div class="centered-text">
                    <h1>Classifications</h1>
                    <ClassificationsInfo /> <br></br>
                    <ClassificationsRules /> <br></br>
                    <ClassificationsLinks /> <br></br>
                </div>
            </div>
        </main>
    );
};

export default ClassificationsPage;
