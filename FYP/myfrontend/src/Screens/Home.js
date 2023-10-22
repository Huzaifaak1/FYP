import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <div className="links" style={{display:'flex',justifyContent:'space-around'}}>
          <h1> <Link to={'/login'}>Login</Link></h1>
          <h1><Link to={'/signup'}>Signup</Link></h1>
      </div>
    </div>
  )
}
