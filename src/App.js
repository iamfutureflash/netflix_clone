import './App.css';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';
import request from './request';
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className='banner'>
      <Banner/>
      </div>
      <div className="row">
        <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
        <Row title="Treading Now" fetchUrl={request.fetchTrending} />
        <Row title="Adventure Movies" fetchUrl={request.fetchAdventureMovies} />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        <Row title="Kids Movies" fetchUrl={request.fetchKidsMovies} />
      </div>
    </div>
  );
}

export default App;