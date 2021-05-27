import './App.css';
import firebase from './firebase/Firebase';
import Row from "./components/Row";
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
        <Banner/>
          <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
          <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        <Footer/>
    </div>
  );
}

export default App;
