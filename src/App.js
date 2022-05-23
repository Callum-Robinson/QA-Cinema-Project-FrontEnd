import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  // toggles the menu dropdown when using small screens
  function toggleMenu() {
    const toggle = document.querySelector("#toggle"); // select the toggle button
    const navLinks = document.querySelectorAll(".nav-link"); // select the nav links

    toggle.addEventListener("click", function(event) {
        console.log("clicked toggle");
        // when the toggle button is clicked, add or remove the 'show'
        navLinks.forEach(element => element.classList.toggle("show"));
    });
}

  return (
    <div className='App'>
      <header>
        <h1>QA CINEMAS</h1>
      </header>

      <nav id="navbar">
          <Link id="toggle" to="#" onClick={toggleMenu}>Menu</Link>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/listingsgallery">Listings Gallery</Link>
          <Link className="nav-link" to="/gettingthere">Getting There</Link>
          <Link className="nav-link" to="/classifications">Classifications</Link>
          <Link className="nav-link" to="/ticketbooking">Ticket Booking</Link>
          <Link className="nav-link" to="/newreleases">New Releases</Link>
          <Link className="nav-link" to="/contactus">Contact Us</Link>
      </nav>

      <Outlet/>

      <footer>
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/about">About</Link>
          <Link className="footer-link" to="/contactus">Contact Us</Link>
            
          <img id="logo" src="/images/qa_fill_primary.svg" alt="placeholder logo" />
      </footer>

      
    </div>
  );
}

export default App;
