import Authentication from "./Pages/Authentication/Authentication";
import Details from "./Pages/Details/Details";
import Homepage from "./Pages/Homepage/Homepage";
import Payment from "./Pages/Payement/Payment";
import Userpage from "./Pages/Userpage/Userpage";
import Welcome from "./Pages/Welcome/Welcome";
import { AuthContext } from "./Context/AuthContext";
import {
  Routes , Route
} from 'react-router-dom'
import { useContext } from "react";

const App = () => {
  const {user}  = useContext (AuthContext)

  return (
  <> 
    <Routes>
        <Route path="/" element={<Homepage/>}></Route>

        <Route path="/about" element={<Welcome/>}></Route>

        <Route path="/userpage" element={<Userpage/>}></Route>

        <Route path="/payement/:id" element={<Payment/>}></Route>

        <Route path="/details/:id" element={ <Details/>}></Route>

        <Route path="/authentication" element={ <Authentication/>}></Route>
    </Routes>
      
  </>
)};

export default App;