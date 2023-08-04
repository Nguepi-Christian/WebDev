import React from 'react'
import "./Topbar.css"
import { Link } from 'react-router-dom'


function Topbar() {
  return (
    <div className='topbar'>

      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className='udefree'>
            KnowlageMarketplace
          </span>
        </Link>
        <nav className='toplinks'>
            <Link to="/about" style={{textDecoration:"none"}}>
              <span className='navlink'>About</span>
            </Link>
            <Link to="/userpage" style={{textDecoration:"none"}}>
              <span className='navlink'>My Account</span>
            </Link>
           
        </nav>
      </div>

      <div className="middle">

        <div className="middleleft">

          <h3 className='desc'>
            Des Cours accessibles a moindre cout sur n'importe quelle thematique.
             <br />A vous de passez  a l'action et de progresser !
          </h3>

          <div className="cat">
            <div className='wrapper'>
              <div className='divitems'>Ebooks</div>
              <div className='divitems'>Cours et Formations</div>
              <div className='divitems'>Ai et Python</div>
              <div className='divitems'>Jeux video et assets</div>
              <div className='divitems'>Developpement web</div>
            </div>
          </div>
          
        </div>

        <div className="middlerigth">
             <img src="./img/1.jpg" alt="" className='images'/>
        </div>

        
      </div>
      {/* <div className='started'>
          <span className='textstarted'>Commencez !</span>
      </div> */}
    </div>
  )
}

export default Topbar