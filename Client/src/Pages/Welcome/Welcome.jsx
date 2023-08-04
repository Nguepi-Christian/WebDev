import React from 'react'
import Footer from '../../Components/Footer/Footer'
import './Welcome.css'



function Welcome() {


  return (
    <div className='Welcome'>
        
        <div className="welcomeTop">
            <div className='welcometopbar'>
                {/* <span className='welcomelogin'>Login</span>
                <span className='welcomelogin reg'>Register</span> */}
            </div>
            <p className='welcomeude'>KnowlageMarketplace</p>
            <p className='msg'>
               Your journey to unlimited learning starts here. Here's what awaits you on our site 
            </p>
            <span className='Startnow'>Start Now !</span>
        </div>

        <div className="welcomeBody">
           <div className="divone">
                <p className='onetitle'>
                    Welcome to Udefree
                </p>
                <p className='onedesc' >
                        Welcome to our platform Udefree, 
                        an alternative to access courses
                        from the best online learning
                        platforms such as Udemy,
                        Coursera, LinkedIn Learning,
                        and more. We offer you much more
                        than just an alternative online
                        course site. By joining our community,
                        you make a smart choice for your personal
                        and professional growth
                </p>
                <div className='oneimgcontainer'>
                    
                    <img src="./img/1.jpg" alt="" className='oneimg'/>
                </div>
           </div>

           <div className="divone">
                <p className='onetitle'>
                    Why choose our site ?
                </p>
                <p className='onedesc' >
                        <ul>
                            <li>
                                Unmatched excellence: We never compromise on the quality of our courses and programs. We provide you with the best content from these renowned platforms so you can benefit from it according to your needs.
                            </li>

                            <li>
                                Total freedom: Forget about time and location constraints. Our download feature allows you to access your courses anytime and anywhere. No need to worry about an internet connection. Learn at your own pace, according to your needs and preferences.
                            </li>

                            <li>
                                We designed our platform to help you save money. Reduce data and bandwidth costs without sacrificing the quality of learning. It's a real bargain!
                            </li>

                            <li>
                                By choosing our platform, you avoid paying the high fees of these individual platforms. Enjoy access to a variety of high-quality courses, all at an affordable price.
                            </li>
                            <li>
                                Guaranteed growth: By choosing our site, you opt for constant evolution. We're here to help you develop your skills, expand your horizons, and achieve your goals. You deserve to shine and reach your full potential.
                            </li>
                        </ul>
                </p>

                <div className='oneimgcontainer'>
                    <img src="./img/App.png" alt="" className='oneimg'/>
                </div>
           </div>

           <div className="divone">
                <p className='onetitle'>
                    Discover our solution   
                </p>
                <p className='onedesc' >
                        <ul>
                            <li>
                                Learning freedom: No more conforming to fixed schedules or spending a fortune on individual courses. Learn on your terms, at your own pace, and from the comfort of your home
                            </li>

                            <li>
                                Personal fulfillment: Our platform goes beyond acquiring skills. It serves as a catalyst for your personal growth. Discover new passions through our diverse range of courses, expand your skills, and open yourself to a world of possibilities.
                            </li>

                            <li>
                                Dynamic community: Join a community of motivated learners and engage with them to enhance your learning experience. Benefit from the advice and different perspectives of fellow members to progress faster
                            </li>
                        </ul>
                </p>
                
                <div className='oneimgcontainer'>
                    <img src="./img/Connected.png" alt="" className='oneimg'/>
                </div>
           </div>

           <div className="divone">
                <p className='onetitle'>
                    How we Do that ?   
                </p>
                <p className='onedesc' >
                     All Ressorces we provide you where buy on the best online plateform courses
                     and we decide to help people who dont have enought money so that that they can
                     has acces to the best knowledge . This does not have any copyright due that we buy.
                     enjouy this ofert. <br />

                     See the video bellow to see how to get file
                </p>
                
                <div className='oneimgcontainer'>
                    <img src="./img/1.jpg" alt="" className='oneimg'/>
                </div>
           </div>
           
           <div className="divone">
                <p className='onetitle'>
                    Let Started !
                </p>
                <p className='onedesc' >
                    You're just a click away from transforming your future. Don't wait any longer to sign up. Join our community and access a treasure trove of knowledge, opportunities, and success.
                    Your success starts here. Register now and let our extraordinary site guide you to unexpected heights.
                </p>
                
                <div className='oneimgcontainer'>
                    <img src="./img/Demo.png" alt="" className='oneimg lets'/>
                </div>

                <div>
                    <span className='Startnow'> Start Now !</span>
                </div>
           </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Welcome