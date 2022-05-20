import React from "react";

import EmailForm from "./EmailForm";
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./Header";



const ContactPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <EmailForm />
            <Footer />
        </>
    );
}


export default ContactPage;