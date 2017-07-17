import React from 'react'
import SearchBar from './searchBar'

export default function About() {
  return(
    <div className='about-page'>
      <SearchBar />
      <div className='about-content'>
        <h1 className='main-thank'>Thank you for attention</h1>
        <h1 className='title is-3'>Technologies that I used in this project</h1>
      </div>
      <div className = 'about-list-wrapper'>
        <ul className='about-list'>
          <li>
            <img
              className='icons'
              src='https://www.shareicon.net/download/2016/07/10/119874_apps_512x512.png'></img>
            React
          </li>
          <li>
            <img
              className='icons'
              src='https://www.shareicon.net/download/2016/07/10/119874_apps_512x512.png'></img>
            React Router</li>
          <li>
            <img
              className='icons'
              src='http://javascript.tutorialhorizon.com/files/2016/06/redux-logo.png'></img>
            Redux</li>
          <li>
            <img
              className='icons'
              src='https://s-media-cache-ak0.pinimg.com/originals/f3/c5/4f/f3c54f51a7cb9de02523e226d6b010b6.png'></img>
            Bulma </li>
          <li>
            <img
              className='icons'
              src='http://www.bernadetteengleman.com/img/skills/sass.png'></img>
            Sass </li>
        </ul>
      </div>
    </div>
  )
}
