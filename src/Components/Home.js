import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

const Home = () => {
  return (

    <div class="gap-x-7 mx-6 gap-9">



    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  
export default TabsExample;

      <Link to="/region">
      <button type="button" class="btn btn-primary mx-6 my-2">Region</button>    
      </Link>
      <Link to="/plot">
      <button type="button" class="btn btn-primary mx-6 my-2">Plot Graph</button>    
      </Link>
      <Link to="/multi">
      <button type="button" class="btn btn-primary mx-6 my-2">Multi</button>    
      </Link>
      <Link to="/points">
      <button type="button" class="btn btn-primary mx-6 my-2">Points</button>    
      </Link>

      </div>
  )
}

export default Home
