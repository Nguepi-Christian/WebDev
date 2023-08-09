import React from 'react'
import "./Topbar.css"
import { Link } from 'react-router-dom'


function Topbar() {
  return (
    <div className='topbar'>

      <div className="top">
        <Link to="/homepage" style={{textDecoration:"none"}}>
          <span className='udefree'>
            Udefree
          </span>
        </Link>
        <nav className='toplinks'>
            {/* <Link to="/about" style={{textDecoration:"none"}}>
              <span className='navlink'>About</span>
            </Link> */}
            <Link to="/userpage" style={{textDecoration:"none"}}>
              {/* <span className='navlink'>My Account</span> */}
              <img src="./img/avatar.png" alt="" className='avatar' />
            </Link>
           
        </nav>
      </div>

      <div className="middle">

        <div className="middleleft">

          <p className='desc'>
            <h1><font color='orange'>Udefree</font></h1>Take action and make progress !
            <br />You have access to the top courses and training from the most popular online learning plateforms.
          </p>

          <div className="cat">
            <div className='wrapper'>
              <div className='divitems'>Personnal Developpement</div>
              <div className='divitems'>Videos Games Developement</div>            
              <div className='divitems'>Web Developpement</div>
              <div className='divitems'>AI and  Python</div>
              <div className='divitems'>Ebooks</div>
            </div>
          </div>
          
        </div>

        <div className="middlerigth">
             <img src="./img/moon.png" alt="" className='images'/>
        </div>

        
      </div>
      {/* <div className='started'>
          <span className='textstarted'>Commencez !</span>
      </div> */}
    </div>
  )
}

export default Topbar