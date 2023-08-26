import { Routes,Route,} from "react-router-dom";
import Calendar from "./Components/Calendar/Calendar"
import Cours from "./Components/Cours/Cours";
import Enseignant from "./Components/Enseignants/Enseignant";
import Notification from "./Components/Notification/Notification";
import Salle from "./Components/Salle/Salle";
import Homepage from "./Pages/Homepage/Homepage"
import Login from './Pages/Login/Login'
import AdminLogin from './Pages/adminlogin/AdminLogin'
import Userpage from './Pages/User/Userpage'
import CreateCalendar from './Components/Calendar/CreateCalendar'
import Main from "./Pages/Main";
import Etudiantdetails from "./Components/Etudiant/Etudiantdetails";
import Etudiantlist from "./Components/Etudiant/Etudiantlist";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";


const App = () => {
  const {user} = useContext(AuthContext)


  return(
    <>
      <Routes>
            <Route path="/" element={ <Main/>}></Route>

            <Route path="/etudiant" element={ <Etudiantlist/>}></Route>

            <Route path="/list/detail/:id" element={ <Etudiantdetails/>}></Route>

            <Route path="/homepage" element={ <Homepage/>}></Route>

            <Route path="/salle" element={<Salle/>}></Route>

            <Route path="/cours" element={<Cours/>}></Route>

            <Route path="/notification" element={<Notification/>}></Route>

            <Route path="/edit/:id" element={<Calendar/>}></Route>

            <Route path="/enseignant" element={<Enseignant/>}></Route>

            <Route path="/user/login" element={<Login/>}></Route>

            <Route path="/admin/login" element={<AdminLogin/>}></Route>

            <Route path="/user/home" element={<Userpage/>}></Route>

            <Route path="/build" element={<CreateCalendar/>}></Route>
      </Routes>     
    </>
  )
};

export default App;