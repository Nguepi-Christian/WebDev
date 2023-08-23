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
          <span><i> {name}</i></span>
          <span><i> Size</i> : --</span>
          <span><font color='blue'><i><a href={link}>Save</a></i></font></span>
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
          <h2 style={{marginBottom:"20px",textAlign:"center"}}>
            <font color='orange'>
              {course && course.name}
            </font>
          </h2>
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