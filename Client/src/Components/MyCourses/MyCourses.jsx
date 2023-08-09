import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Link } from "react-router-dom"
import './MyCourses.css'


export default function MyCourses() {
  //const { user } = useContext(AuthContext)
  const user = JSON.parse(localStorage.getItem("user"))
  
  // <span className='action update'><a href={link+'.png'}>save</a></span>
  const UserCourseItem = ({index,id,name , author , category , price}) =>{
    return(
      <div className="usercourseitem" key={index}>
        <div className='courseitemtitle'>
          <span><b>Courses</b> : <font color="blue">{name}</font></span>
          <span><b>Author</b> : <font color="blue">{author}</font></span>
          <span><b>Price</b> : <font color="blue">$ {price}</font></span>
          <span><b>Categorie</b> : <font color="blue">{category}</font></span>
          <span>
            <Link to={"/download/"+id}
              style={{
                textDecoration:"none",
                cursor:"pointer",
                marginLeft:"70%",
                backgroundColor:"",
                color:"blue"
                }}
              >
                <b>Download</b>
            </Link>
          </span>
        </div>
      </div>
    )
  }

  
  var i = 0 ;
  
  return (
    <>
      <div className="ordertop">
        <h2 className='ordertoptitle'>Courses and Formations</h2>
      </div>
      <div className='MyCourses'>
              { 
                user && 
                  user.courses.map(element => (
                        <UserCourseItem key={i++} id={element._id} name = {element.name} author = {element.creator} category = {element.category} price={element.actual_price}/> 
                  )
                )
              } 
          
      </div>
  </>
  )
}
