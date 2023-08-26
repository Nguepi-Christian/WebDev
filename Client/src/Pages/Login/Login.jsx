import { useContext, useRef, useState } from 'react';
import './Login.css'
import { LoginCall } from '../../ApiCalls';
import { AuthContext } from '../../Context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import { Link, Navigate } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

export default function Login(){
    
    const {user,isFetching,error,dispatch}=useContext(AuthContext)
    const email = useRef()
    const password = useRef()
    
  const nav = useNavigate()
  


    const HandleLogin = (e)=> {
      e.preventDefault()
      LoginCall({email : email.current.value,password : password.current.value},dispatch)
      if(user){
        nav("/user/home")
      }
    }
    
 
    return (
        <div className="logincontainer">
            <form className='form' onSubmit={HandleLogin}>
                <span className='textlogin'>Connection</span>
                <input className='loginemail' type="email" ref={email} name="" placeholder='email' id="" />
                <input className='loginpassword' type="password"  ref={password} name=""  placeholder='mot de passe' id="" />

                <div className='loginsetting'>
                    <label htmlFor=""><input className='' type="checkbox" name="" id="" />Se souvenir</label>
                    <span className='forget'>mot de passe oublier ?</span>
                </div>

                <span className='error'></span>
                <button className='connection' type='submit'>{isFetching ?  <CircularProgress color='white' size="20px"/> :"Connecter"}</button>
            
               
            </form>

            
            
        </div>
    )
}