import React, { useContext, useRef, useState } from 'react'
import './Authentication.css'
import { loginCall } from "../../ApiCalls.js"
import { api } from '../../Config'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';

export default function Authentication() {
    const [login,setLogin] = useState(true)
    const [register,setRegister] = useState(false)
    const navigate = useNavigate()

    
    const {user , dispatch} = useContext(AuthContext)

    const  Login =  () =>{

        const email = useRef()
        const password = useRef()

        const login = async (e) => {
            e.preventDefault();
            if(password.current.value !== "" && email.current.value !== ""){
                loginCall({email : email.current.value,password : password.current.value},dispatch)
                navigate('/')
            }else{
                alert('empty input(s) !')
            }

             
        }

        return (
            <div className='login'>
                
                <div className='left'>
                    <img src="./img/3.jpg" alt="" className='loginimg'/>
                </div>
                <div className='right'>
                    <p align="center"><><i>KnowlageMarketplace</i></></p><br />
    
                    <form  method="post" className='form' onSubmit={login}>
                        <input type="email" ref={email} placeholder='Your email' className='forminput'/>
                        <input type="password" ref={password} placeholder='Your password' className='forminput'/>
                        <button className='formbutton' type = 'submit'>Submit</button>
                        <p align='center'><i>You don't have account ?</i></p>
                        <span  className='formbutton' onClick={(e)=>Switch('register')} >Register</span>
                    </form>

                  
                </div>
            </div>
           
        )
    
    } 
    
    const  Register = () =>{
        const email = useRef()
        const password = useRef()
        const passwordagain = useRef()
        const username = useRef()
        const phone = useRef()


        const [isOpen, setIsOpen] = useState(false);
      
        const closeModal = () => {
            setIsOpen(false); 
            Switch('login')
        };
        
        
        
        /* register */
        const register = async (e) =>{

            e.preventDefault();

            if(password.current.value === passwordagain.current.value 
                && password.current.value !== "" && passwordagain.current.value !== ""){
                const register_data = {
                    email : email.current.value,
                    password : password.current.value,
                    username : username.current.value ,
                    number : phone.current.value
                }
                try {
                    const res = await api.post('/users/register', register_data)
                    console.log(res.statusText)
                    if(res.statusText === "OK"){
                        setIsOpen(true)
                    }
                } catch (error) {
                    alert("register error ! try again")
                }
                
            }else{
                alert('empty inputs !')
            }
        }

        return (
            <>
                <div className='login register'>
                <div className='left'>
                    <img src="./img/4.jpg" alt=""  className='loginimg'/>
                </div>
                <div className='right'>
                    <p align="center"><b><>KnowlageMarketplace</></b></p><br />
    
                    <form  method="post" className='formrgister' onSubmit={register}>
                        <input type="text" ref = {username} placeholder='Your name and surname' className='forminput'/>
                        <input type="tel" ref = {phone}  placeholder='Your phone number' className='forminput'/>
                        <input type="email" ref = {email} placeholder='Your email' className='forminput'/>
                        <input type="password" ref={password} placeholder='Your password' className='forminput'/>
                        <input type="password" ref ={passwordagain} placeholder='Your password again' className='forminput'/>
                        <button className='formbutton' type='submit'>Submit</button>
                        <span className='formbutton' onClick={()=>Switch('login')}>Go to Login</span>
                    </form>
                </div>

                
                { 
                (isOpen)  && 
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>
                            &times;
                            </span>
                            <h4>Notification</h4>
                            <div className="body">
                                <p>Your account have been Successfull created ! you can now Login </p>
                                <div className="modalfooter" >
                                    <button className='modalfooterbutton ' onClick={closeModal}> Okay </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
        

            </div>
            </>
        )
    
    }
    
    

    const Switch = (component) => {
        switch (component) {
            case "login":
                setLogin(true)
                setRegister(false)
                break;
            case "register":
                setLogin(false)
                setRegister(true)
                break;
            default:
                break;
        }
    }

  return (
    <div className='AuthContainer'>

        {
            (login &&  <Login/>) || (register && <Register/>)
        }
        
    </div>
  )
}
