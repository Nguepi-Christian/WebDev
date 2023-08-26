import "./sidebar.css";

import { Link } from "react-router-dom";
import Demande from "./Demande";
import { useState } from "react";

export default function Sidebar() {

   const [demande ,setDemande] =useState(true)
   const [notification ,setNotification] = useState()
   const [activite , setActivite] = useState()


  return (
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
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                {/* <PermIdentity className="sidebarIcon" /> */}
                Mes Activitees
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                {/* <Storefront className="sidebarIcon" /> */}
                Demandes
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                {/* <Storefront className="sidebarIcon" /> */}
                 Notifications
              </li>
            </Link>
           
            
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

        <div className="sidebarMenu">

          {
            demande && <Demande/>
          }
         
        </div>


      </div>
    </div>
  );
}
