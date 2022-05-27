import React from "react";

import EmailForm from "./EmailForm";

const ContactPage = () => {
    return (
        <>
            <main>
                <div class="clearfix">
                <div class="centered-text">
                    <img id="cinema2" src="/images/cinema.png" alt="a photograph of our Glasgow cinema from the street" />
                    <br /><br />
                    <h3>Address:</h3>
                    QA Cinema Glasgow<br />
                    17 Renfield Street<br />
                    Glasgow<br />
                    Scotland<br />
                    G2 5AH<br />
                    <br />
                    <h3>Give us a phone:</h3>
                    <a href="tel:03450747851">03450 747 851</a><br />
                    <h3>Send us an email:</h3>

                    <EmailForm />
                    </div>
                </div>
            </main>
        </>
    );
}


export default ContactPage;