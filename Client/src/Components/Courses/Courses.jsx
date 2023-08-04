import React from 'react'
import './Courses.css'
import { Link } from "react-router-dom"

function Courses({data}) {
  return (
    <div className='Couses'>

        <div className='Courseimg'>
            <img alt="" src="./img/3.jpg"  className='coverimg'/>
        </div>

        <div className='Coursedescription'>
            <span className='Title'>{data.name}</span>
            <span className='CourseAuthor'><b>Author</b> : {data.creator}</span>
            <span className='note'>Download : {data.students} </span>
            <span className='price'>${data.actual_price}</span>
        </div>

        <div className='CoursesFooter'>
          <span className='FooterButton details'>
            <Link to={"/details/"+data._id} style={{textDecoration:"none"}}>
                Details
            </Link>
          </span>
          <span className='FooterButton tocard'>
            <Link to={"/payement/"+data._id} style={{textDecoration:"none"}}>
                Buy and Download
            </Link>
          </span>
        </div>
    </div>
  )
}

export default Courses