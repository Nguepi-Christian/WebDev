import './Register.css'
import { RegisterApi,UploadProfileImge } from '../../ApiCalls';
import { useState,useRef } from 'react';


export default function Register(){

    const email=useRef()
    const password=useRef()
    const passwordAgain=useRef()
    const username=useRef()
    const [file,setFile] = useState(null)

    const HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(password.current.value)
        console.log(passwordAgain.current.value)
        if(password.current.value !=passwordAgain.current.value){
            passwordAgain.current.setCustomValidity("passwords don't match ...")
        }
        else{
            const newuser={
                email:email.current.value ,
                password:password.current.value,
                username:username.current.value, 
                profilePicture:"" 
            };
            if(file){ 
                const data=new FormData()
                const name =  Date.now()+file.name;
                data.append('file',file)
                data.append('name',name) 
                newuser.profilePicture=name
                UploadProfileImge(data)
            }else{
                newuser.profilePicture="avatar.png"
            }
            RegisterApi(newuser);
        }  
    }

    return (
        <div className="Maincontainer">
         
        <form  className='form-register' onSubmit={HandleSubmit}>
            <span className='textregister'>Register</span>
            <input className='register-email' type="text" ref={username} required name="" placeholder='username' id="" />
            <input className='register-email' type="email" ref={email} required name="" placeholder='email' id="" />
            <input className='register-password' type="password" name="" ref={password} required placeholder='mot de passe' id="" />
            <input className='register-password' type="password" ref={passwordAgain} required name=""  placeholder='mot de passe' id="" />
            <label htmlFor="photo" className='laelphoto'>Importer une Photo de profile</label>
            <input 
                onChange={(e)=>setFile(e.target.value[0])}
                type="file" 
                name="" 
                hidden 
                
                id="photo" />
            <div className='register-setting'>
                <span className='forget'>Se Connecter </span>
            </div>

            <span className='error'>
                
            </span>
            <button className='connection' type='submit'>Continuer</button>
        </form>
        
    </div>

    )
}