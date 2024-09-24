import React, { useEffect,useState } from 'react';
import "./Home.scss";
import axios from "axios";
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";

const apikey = "bb3d66dff21adcb28b04daa7db7cf5c2";
const url="https://api.themoviedb.org/3";
const popular="popular";
const upcoming="upcoming";
const nowPlaying ="now_playing";
const toprated="top_rated";
const imgurl="https://image.tmdb.org/t/p/original"

const Card =({img})=>(
  <img className="card" src={img} alt="cover"/>
)
const Row =({title,arr=[],})=>(
  <div className='row' >
    <h2>{title}</h2>
    <div>
      {
        arr.map((item)=>(
          <Card  img={`${imgurl}/${item.poster_path}`} />
        ))
      }
    </div>
  </div>
)

const Home = () => {
    const [popularMovies,setPopularMovies] = useState([])
    const [upcomingMovies,setUpcomingMovies] = useState([])
    const [nowplayingMovies,setNowPlayingMovies] = useState([])
    const [topratedMovies,setTopRatedMovies] = useState([])


    useEffect(()=>{
    const fetchPopular=async()=>{
       const {data:{results}}=await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
       setPopularMovies(results)
    };

    const fetchUpcoming=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setUpcomingMovies(results)
    };

    const fetchNowplaying=async()=>{
    const {data:{results}}=await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`);
    setNowPlayingMovies(results)
    };

    const fetchToprated=async()=>{
    const {data:{results}}=await axios.get(`${url}/movie/${toprated}?api_key=${apikey}`);
    setTopRatedMovies(results)
    };
    fetchPopular()
    fetchUpcoming()
    fetchNowplaying()
    fetchToprated()
  },[])

  return (
    <seaction class="home">
      <div class="banner" style={{
        backgroundImage:popularMovies[0]?`url(${`${imgurl}/${popularMovies[0].poster_path}`})`:"none"
      }}>
    {popularMovies[0] &&(<h1>{popularMovies[0].original_title}</h1>)}
    {popularMovies[0] &&(<p>{popularMovies[0].overview}</p>)}

        <div><button><BiPlay />Play </button>
      <button>My List <AiOutlinePlus /></button>
       </div>
      </div>
      <Row  title={"Populer On Netflix"} arr={popularMovies}/>
      <Row  title={"Upcoming"} arr={upcomingMovies}/>
      <Row  title={"Now Playing"} arr={nowplayingMovies}/>
      <Row  title={"Top Rated"} arr={topratedMovies}/>
    </seaction>
  )
}
export default Home;