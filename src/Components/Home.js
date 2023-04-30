import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class="gap-x-7 mx-6 gap-9">
      <Link to="/region">
      <button type="button" class="btn btn-primary mx-6 my-2">Region</button>    
      </Link>
      <Link to="/plot">
      <button type="button" class="btn btn-primary mx-6 my-2">Plot Graph</button>    
      </Link>
      </div>
  )
}

export default Home
