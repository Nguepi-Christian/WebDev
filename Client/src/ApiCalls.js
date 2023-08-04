import { useNavigate } from 'react-router-dom';
import { api } from './Config.js'

const navigate = useNavigate

export const loginCall = async (userCredential , dispatch) => {
   dispatch({ type: "LOGIN_START" });
    try {
      const res = await api.post("/users/login", userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };


  export  const ClearLocalStorage = () => {
    localStorage.setItem("user", JSON.stringify(""))
  }
