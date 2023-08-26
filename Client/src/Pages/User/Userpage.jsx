import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import Calendar from "../../Components/Calendar/Calendar"
import Topbar from "../../Components/Topbar/Topbar"
import Activite from "../../Components/UserSidebar/Activite"
import Demande from "../../Components/UserSidebar/Demande"
import Notifications from "../../Components/UserSidebar/Notifications"
import Sidebar from "../../Components/UserSidebar/Sidebar"
import "./Userpage.css"


export default function Homepage() {
  
 

  //const [demande ,setDemande] =useState(false)
  const [notification ,setNotification] = useState(false)
  const [activite , setActivite] = useState(true)
  const [demande , setDemande] = useState(true)

  const action = (type) =>{
      console.log(type)

      switch (type) {
        case "activite":
          setActivite(true)
          setDemande(false)
          setNotification(false)
          break;
        case "demande":
          setActivite(false)
          setDemande(true)
          setNotification(false)
          
          break;
        case "notification":
          setActivite(false)
          setDemande(false)
          setNotification(true)
          break;
        default:
          break;
      }
  }

  return (
    <>
       <div className="Homepage">
          <Topbar/>  
            <div className='HomeWrapper'>
                  
                  <div className="sidebar">
                        <div className="sidebarWrapper">
                          <div className="sidebarMenu">
                            <h3 className="sidebarTitle">Dashboard</h3>
                            <ul className="sidebarList">

                              <li className="sidebarListItem active">
                                {/* <LineStyle className="sidebarIcon" /> */}
                                Acceuil
                              </li>
                              
                            </ul>
                          </div>
                          <div className="sidebarMenu">
                            <h3 className="sidebarTitle">Menu Principal</h3>
                            <ul className="sidebarList">
                              
                                <li className="sidebarListItem" onClick={(e)=>action("activite")}>
                                  {/* <PermIdentity className="sidebarIcon" /> */}
                                  Mes Activitees
                                </li>
                           
                              
                                <li className="sidebarListItem" onClick={(e)=>action("demande")}>
                                  {/* <Storefront className="sidebarIcon" /> */}
                                  Demandes
                                </li>
                              
                              
                                <li className="sidebarListItem" onClick={(e)=>action("notification")}>
                                  {/* <Storefront className="sidebarIcon" /> */}
                                  Notifications
                                </li>
                              
                            
                              
                            </ul>
                          </div>
                          <div className="sidebarMenu">
                            <h3 className="sidebarTitle">Autres </h3>
                            <ul className="sidebarList">
                              <li className="sidebarListItem">
                                {/* <DynamicFeed className="sidebarIcon" /> */}
                                Aide
                              </li>

                              <li className="sidebarListItem">
                                {/* <ChatBubbleOutline className="sidebarIcon" /> */}
                                Fermer la session
                              </li>
                            </ul>
                          </div>
                          <div className="sidebarMenu"></div>
                        </div>
                      </div>
                
                
                
                
                
                <div className="Center">
                    {

                        (activite && <Activite/>) ||
                       
                        (notification && <Notifications />) ||

                        (demande && <Demande />)
                    }
                </div>
        
            </div>
       
        </div>
  
    </>
  )
}
