import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  // toggles the menu dropdown when using small screens
  function toggleMenu() {
    // const toggle = document.querySelector("#toggle"); // select the toggle button
    const navLinks = document.querySelectorAll(".nav-link"); // select the nav links

    // toggle.addEventListener("click", function(event) {
        console.log("clicked toggle");
        // when the toggle button is clicked, add or remove the 'show'
        navLinks.forEach(element => element.classList.toggle("show"));
    // });
}

  return (
    
    <div className='App'>
      <header>
        <img id="banner" src="/images/QA-logo-banner.png" alt="QA Cinemas" />
      </header>

      <nav id="navbar">
          <Link id="toggle" to="#" onClick={toggleMenu}><img id="banner" src="/images/QA-logo-banner.png" alt="QA Cinemas" /><img id="menu-icon" src="/images/hamburger-menu-icon.png" alt="menu icon" /></Link>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/listingsgallery">Listings Gallery</Link>
          <Link className="nav-link" to="/gettingthere">Getting There</Link>
          <Link className="nav-link" to="/classifications">Classifications</Link>
          <Link className="nav-link" to="/ticketbooking">Ticket Booking</Link>
          <Link className="nav-link" to="/newreleases">New Releases</Link>
          <Link className="nav-link" to="/contactus">Contact Us</Link>
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit"><i class="fa fa-search"></i></button>
      </nav>

      <Outlet/>

      <footer>
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/about">About</Link>
          <Link className="footer-link" to="/contactus">Contact Us</Link>
            
          <img id="logo" src="/images/QA-logo-small.png" alt="placeholder logo" />
      </footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
    </div>
  );
}

export default App;
