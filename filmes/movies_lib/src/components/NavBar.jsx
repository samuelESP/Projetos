import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

import './NavBar.css';

function NavBar() {

  const[Search, setSearch] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Search) return;

    navigate(`/search?q=${Search}`);
    setSearch("");
  }
  


  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie /> Movies_Lib</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Busque filme..." 
            onChange={(e) => setSearch(e.target.value)}
            value={Search}
            />
            <button type="submit">
                <BiSearchAlt2/>
            </button>
        </form>
    </nav>
  )
}

export default NavBar;