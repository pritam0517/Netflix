import React from 'react';
import logo from "../../../logo.png";
import { Link } from 'react-router-dom';
import searchicon from "../../../logo192.png";



const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" className='nlogo'/>
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyadded">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>

        <img src={searchicon} alt="logo192" className='search' />
    </nav>
  )
}

export default Header;