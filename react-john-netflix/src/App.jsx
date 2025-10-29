import requests from './api/requests.js';
import './App.css';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import Row from './components/Row.jsx';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" id="NO" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" id="Tn" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchURL={requests.fetchComedyMovies} />
      <Footer />
    </>
  );
}

export default App;
