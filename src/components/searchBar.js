import React from 'react'
import {Link} from 'react-router-dom'

export default function SearchBar(){
  return(
    <div>
      <nav className='nav main-nav'>
        <div className="nav-left nave-menu is-hidden-touch">
          <Link className="navbar-item" to="/">
            <h1 className='title logo'>Socials</h1>
          </Link>
        </div>

        <div className='nav-center is-hidden-desktop'>
          <a className="navbar-item" href="/">
            <h1 className='title logo'>Socials</h1>
          </a>
        </div>


        <div className="nav-right nav-menu is-active">
            <Link className="navbar-item" to={'/profile'} >
            Profile
          </Link>
            <Link className="navbar-item" to={"/about"} target="_blank">
            About
          </Link>
        </div>
      </nav>
    </div>
    )
}
