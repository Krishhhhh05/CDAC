// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (

//     <div class="gap-x-7 mx-6 gap-9">



//       <Link to="/region">
//       <button type="button" class="btn btn-primary mx-6 my-2">Region</button>    
//       </Link>
//       <Link to="/plot">
//       <button type="button" class="btn btn-primary mx-6 my-2">Plot Graph</button>    
//       </Link>
//       <Link to="/multi">
//       <button type="button" class="btn btn-primary mx-6 my-2">Multi</button>    
//       </Link>
//       <Link to="/points">
//       <button type="button" class="btn btn-primary mx-6 my-2">Points</button>    
//       </Link>

//       </div>
//   )
// }

// export default Home
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
      <Link to="/theory1">
      <button type="button" class="btn btn-primary mx-6 my-2">Inequations</button>    
      </Link>
      <Link to="/theory2">
      <button type="button" class="btn btn-primary mx-6 my-2">Understanding Planes of Axis</button>    
      </Link>
      <Link to="/theory3">
      <button type="button" class="btn btn-primary mx-6 my-2">Plotting of Lines</button>    
      </Link>
      <Link to="/theory4">
      <button type="button" class="btn btn-primary mx-6 my-2">Shading of Region</button>    
      </Link>
      </div>
  )
}

export default Home