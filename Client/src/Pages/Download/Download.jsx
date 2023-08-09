import React, { useContext, useEffect, useState } from 'react'
import './Download.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext'

function Download() {

  const Top = () => {
    return(
        <div className="topdownloaddetails">
            <Link to="" style={{textDecoration:"none"}}>
                <h2 className='udefree'>Download</h2>
            </Link>
        </div>
    )
  }


  const CourseDownload = ({index,name,link}) =>{
    return (
    
        <div className='cousedownloadbox' key={index}>
          <span><b>{name}</b></span>
          <span><b>size</b> : --</span>
          <span><font color='blue'><b><a href={link}>Save</a></b></font></span>
        </div>
      
    )
  }

  const [course , setCourse] = useState(null)
  const id = useParams().id

  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  
  useEffect(() => {
   
  }, [])

  useEffect(() => {
    
    const check = () => {
      !user && navigate('/homepage')
    }

    check()
      const Load = () =>{
            return (
            user && user.courses.filter((item)=> item._id.toLowerCase().includes(id))
          )
        }

       const course = Load()
       setCourse(course[0])
  }, [])
  



 var i = 0;

  return (
    <>
      <Top/>
      <div className='Download'>
          <p style={{marginBottom:"20px",textAlign:"center"}}>
            <font size="6" color='orange'>
              {course && course.name}
            </font>
          </p>
            { 
              course && course.part.map(item => (
                  <CourseDownload key={i++} name = {item.name} link = {item.link}/> 
                )
              )
            }  
           
      </div>
    </>
  )
}

export default Download