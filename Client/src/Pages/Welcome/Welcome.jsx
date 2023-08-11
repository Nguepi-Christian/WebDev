import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from "react-router-dom"
import './Welcome.css'

function Welcome() {

  const navigate = useNavigate()
 
  return (
    <div className='Welcome'>
        
        <div className="welcomeTop">
           {/*  <div className='welcometopbar'>
                <span className='welcomelogin'>Login</span>
                <span className='welcomelogin reg'>Register</span>
            </div> */}
            <p className='welcomeude'><font color="orange">Udefree</font></p>
            <img src="./img/astronaut.png" alt="" />
            
            <p className='msg'>
               Your journey to unlimited learning starts here !
            </p>
            <span className='Startnow' onClick={(e)=>{navigate('/homepage')}}>Start Now !</span>
        </div>

        <div className="welcomeBody">
           <div className="divone">
                <p className='onetitle'>
                    Welcome to <b><font color="orange">Udefree !</font></b>
                </p>
                
                <p className='onedesc' >
                        Welcome to <b><font color="orange">Udefree</font></b>, 
                        an alternative to access courses
                        from the best online learning
                        platforms such as Udemy,
                        Coursera, LinkedIn Learning,
                        and more. We offer you much more
                        than just an alternative online
                        course site. By joining our community,
                        you make a smart choice for your personal
                        and professional growth.
                </p>
                <div className='oneimgcontainer'>
                    <img src="./img/team.png" alt="" className='oneimg' loading='lazy'/>
                </div>
           </div>

           <div className="divone">
                <p className='onetitle'>
                    Why choose our site ?
                </p>
                <p className='onedesc' >

                            <span>
                                <b>Total freedom</b> <br /> Forget about time and location constraints. Our download feature allows you to access your courses anytime and anywhere. No need to worry about an internet connection. Learn at your own pace, according to your needs and preferences.
                                We designed our platform to help you save money, Reduce data and bandwidth costs without sacrificing the quality of learning. It's a real bargain!
                                By choosing our platform, you avoid paying the high fees of these individual platforms. Enjoy access to a variety of high-quality courses, all at an affordable price.
                            </span>
                            <br />
                            <span>
                                <b>Guaranteed growth</b><br /> By choosing our site, you opt for constant evolution. We're here to help you develop your skills, expand your horizons, and achieve your goals. You deserve to shine and reach your full potential.
                            </span>
                    
                </p>

                <div className='oneimgcontainer'>
                    <img src="./img/App.png" alt="" className='oneimg' loading='lazy'/>
                </div>
           </div>

           <div className="divone">
                <p className='onetitle'>
                    Discover our solution   
                </p>
              
                        <ul className='onedesc'>
                            <li>
                                <b>Best price</b> : we provide all our course for  $1 - 20$ so that you can enjoy , this if for your !
                            </li>
                            <li>
                                <b>Learning freedom</b>: No more conforming to fixed schedules or spending a fortune on individual courses. Learn on your terms, at your own pace, and from the comfort of your home
                            </li>

                            <li>
                                <b>Personal fulfillment</b> : Our platform goes beyond acquiring skills. It serves as a catalyst for your personal growth. Discover new passions through our diverse range of courses, expand your skills, and open yourself to a world of possibilities.
                            </li>

                           
                        </ul>
              
                
                <div className='oneimgcontainer'>
                    <img src="./img/Connected.png" alt="" className='oneimg' loading='lazy'/>
                </div>
           </div>

           <div className="divone">
                <p className='onetitle'>
                    How we Do that ?   
                </p>
                <p className='onedesc' >
                     All Courses we provide here where buy on the best online plateform courses.
                </p>
                
                <div className='scroll'>
                        <img src="./img/Cover.png" alt="" className='oneimg' loading='lazy'/>
                        <img src="./img/1.jpg" alt="" className='oneimg' loading='lazy' onLoad={(e)=>console.log('load')}/>
                        <img src="./img/4.jpg" alt="" className='oneimg' loading='lazy'/>
                        <img src="./img/3.jpg" alt="" className='oneimg' loading='lazy'/>  
                </div>
           </div>
           
           <div className="divone">
                <p className='onetitle'>
                    Let Started !
                </p>
                <p className='onedesc' >
                    You're just a click away from transforming your future. Don't wait any longer to sign up. Join our community and access a treasure trove of knowledge.
                    Register now and let our extraordinary site guide you to unexpected heights.
                </p>
                
                <div className='oneimgcontainer'>
                    <img src="./img/Demo.png" alt="" className='oneimg lets'/>
                </div>

               
                <div className='welcometopbar'>
                    <span className='welcomelogin' onClick={(e)=>{navigate('/authentication')}}>Login</span>
                    <span className='welcomelogin reg' onClick={(e)=>{navigate('/authentication')}}>Register</span>
                </div> 
                
           </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Welcome