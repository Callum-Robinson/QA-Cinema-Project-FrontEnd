import React from "react";

const Navbar = () => {
    return (
        <>

            <Nav>
            
                <NavMenu>
                    <NavLink to="/about">
                    About
                    </NavLink>

                    <NavLink to="/listings-gallery">
                    Listings Gallery
                    </NavLink>

                    <NavLink to="/new-releases">
                    New Releases Gallery
                    </NavLink>

                    <NavLink to="/classifications">
                    Classifications
                    </NavLink>

                    <NavLink to="/bookings">
                    Ticket Bookings
                    </NavLink>

                    <NavLink to="/getting-there">
                    Getting There
                    </NavLink>

                    <NavLink to="/contact">
                    Contact
                    </NavLink>
                </NavMenu>    

            </Nav>
            
        </>
    );

};

export default Navbar;