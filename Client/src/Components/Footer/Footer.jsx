import React from 'react'
import './Footer.css'


function Footer() {
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
              <span>City : </span>
              <span>Adress : </span>
              <span>PBOX : </span>
              
        </div>
        <div className="FooterOthers">
              <p className="offer">About us</p>
              <span>email :</span>
              <span>Youtube :</span>
              <span>Telegram group :</span>
        </div>
        <div className="FooterOthers">
              <p className="offer">Our Services</p>
              <span>Couses</span>
              <span>Formations</span>
              <span>Ebooks</span>
        </div>
        <div className="FooterOthers">
              <p className="offer">More</p>
              <span>Security</span>
              <span>Report problem</span>
              <span>Terms & Conditions</span>
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