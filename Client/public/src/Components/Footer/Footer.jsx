import React from 'react'
import './Footer.css'
import {useNavigate} from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="Footercontainer">

       <div className="FooterSocial">
            <div className="useraccount">
                <p className="username">
                  <i> This is for you , try it and share !</i>
                </p>
            </div>
       </div>

      <div className="OhtersContainer">
        <div className="FooterOthers">
              <p className="offer">Location</p>
              <span>Country : Pologne</span>
              {/* <span>City : </span>
              <span>Adress : </span>
              <span>PBOX : </span> */}
              
        </div>
        <div className="FooterOthers">
              <p className="offer">About us</p>
              {/* <span>email :</span>
              <span>Youtube :</span>
              <span>Telegram group :</span> */}
             <span className='Startnow' onClick={(e)=>{navigate('/')}}>Go Now !</span>

        </div>
        <div className="FooterOthers">
              <p className="offer">Our Services</p>
              <span>Couses</span>
              <span>Formations</span>
              <span>Ebooks</span>
        </div>
        <div className="FooterOthers">
              <p className="offer">Social</p>
              <span>Facebook</span>
              <span>Youtube</span>
              <span>Telegram</span>
        </div>
      </div>

      <div className='footerbottom'>
          <h1 className='footerudefree'>Udefree</h1>
          <span className='copy'>Official website , Copyright 2023</span>
      </div>
       
    </footer>
  )
}

export default Footer