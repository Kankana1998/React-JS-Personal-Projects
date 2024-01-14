
import { useEffect, useState } from 'react';
import './App.css'
import Result from './components/Result'
import axios from 'axios';
import SearchIcon from "./search.svg";

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
    .then((response) => setMovies(response.data.results))
    .catch((error) => console.log(error))
  }

  const getSearchedMovies = () => {
    axios.get(SEARCHAPI + search)
    .then((response) => setMovies(response.data.results))
    .catch((error) => console.log(error));
  }

  useEffect(() => {
      setMovies([]);
      if(search === ""){
        getAllMovies()
      }else{
        getSearchedMovies()
      }
    }, [search])

  return (
  

      <div className='app'>
        <h1 className='heading'>Movie Couch</h1>
        <div className='search'>
        <input value={search} onChange={changeTheSearch} />

        <img src={SearchIcon} alt="search movies" onClick={() => searchMovies(changeTheSearch)} />
        
        </div>
        {
          movies.length === 0 ? <div className="results"> Loading... </div> : <Result movies={movies}/>
        }
    </div>
    
  );
}

export default App;
