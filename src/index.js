import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './components/Contact/ContactPage';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import Error from './components/Error/Error';
import ClassificationsPage from './components/Classifications/ClassificationsPage';
import ListingsGalleryPage from './components/Listings/ListingsGalleryPage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import GettingTherePage from './components/GettingThere/GettingTherePage';
import TicketBookingPage from './components/TicketBooking/TicketBookingPage';
import NewReleaseDetails from './components/NewRelease/NewReleaseDetails';
import NewReleasePage from './components/NewRelease/NewReleasePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>

          <Route index element={<HomePage />}/>
          <Route path="about" element={<AboutPage />} />

          <Route path="listingsgallery" element={<ListingsGalleryPage />} >
            <Route path=":movieId" element={<MovieDetails />} />
          </Route>

          <Route path="gettingthere" element={<GettingTherePage />} />
          <Route path="classifications" element={<ClassificationsPage />} />
          <Route path="ticketbooking" element={<TicketBookingPage />} />

          <Route path="newreleases" element={<NewReleasePage />} >
            <Route path=":releaseId" element={<NewReleaseDetails />} />
          </Route>

          <Route path="contactus" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<Error />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
