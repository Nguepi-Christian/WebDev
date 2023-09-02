import "./Homepage.css"
import Topbar from '../../Components/Topbar/Tobpar'
//import Courses from "../../Components/CousesList/CoursesList"
import CoursesList from "../../Components/CousesList/CoursesList"
import Footer from "../../Components/Footer/Footer"
import "../../Components/Mobile.css"
import { useContext, useState } from "react"
//import Modal from "../../Components/Modal/Modal"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

function Homepage() {

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
      setIsOpen(false);
  };
  
  const goTo = () => {
    setIsOpen(false);
    navigate('/authentication')
};
  

  return (
    <div className='Homepage'>
        <Topbar/>
        {/* <button onClick={(e) => ClearLocalStorage()}>Clear</button> */}
        <CoursesList/>
        <Footer/>

      {
         (isOpen && !user )  && 
         <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            
            <div className="body">
                <p>You don't have an account or your are not login , your can't acces to your userpage ! please <b>Login</b> or <b>Register</b> to have access to others functionnality !</p>
                <div className="modalfooter" >
                    <button className='modalfooterbutton ' onClick={closeModal}>Ok</button>
                    <button className='modalfooterbutton ' onClick={goTo}>Login</button>
                    <button className='modalfooterbutton ' onClick={goTo}>Register</button>
                </div>
           </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Homepage