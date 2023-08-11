import React, { useEffect, useState } from 'react'
import './Details.css'
import Footer from '../../Components/Footer/Footer'
import { api } from '../../Config.js'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'


const Top = () => {
    return(
        <div className="topdetails">
            <Link to="/homepage" style={{textDecoration:"none"}}>
                 <h2 className='udefree'>Udefree</h2>
            </Link>
           
        </div>
    )
}
var i = 0;
function Details() {

    const [course , setCourse] = useState(null)
    const id = useParams().id

    useEffect(() => {
      
      const SingleCourse = async () => {
           const res = await api.get('/courses/one/' + id )
           setCourse(res.data)
      }

      SingleCourse()

    }, [id])
    

  return (
    <>
    <div className='Details'>
        <Top/>

        <div className='MainDetails'>

            <div className='detailsContainer'>
                <h4 className='itempath'>Category : {course && course[0].category}</h4>
                <h1 className='itemTitle'>
                   {course && course[0].name}
                </h1>
               

                <span className='itemperson'>Note : {course && course[0].students} /5</span>
                {/* <span className='itemdate'>Derniere Mise a jours :23/04/2023 a 13h26 min</span> */}
                <span className='itemauthor'>Author : {course && course[0].creator}</span>
            </div>

           {/*  <div className='itemimg'>
                <img src="./img/2.jpg" alt=""  className='itemcover'/>
            </div>
 */}
        </div>

        <div className='MoreDetails'>

            <div className='DetailsLeft'>
                <div className='itemmlearn'>
                   
                    <h2 className=''><font color="orange">Description</font> : <br /></h2>
                     <p className='itemdesc'>{course &&  course[0].description}</p>   
                   
                    <p className='waylearn'>After this Course Students can:</p>
                
                    <div className='learnlist'>
                        <ul className='listskill' >
                        {
                            course && course[0].what_you_will_learn.map((item) => (
                                <li key={i++}>{item}</li>
                            ))
                        }
                            
                        </ul>
                    </div>
                </div>
                <div className='itempart'>
               
                    <p className='partlearn'>Part of this cours</p>
                
                   
                        
                        {
                            course && course[0].part.map((item) => (
                                <div className='partskill' key={i++}>
                                    <span>{item.name}</span>
                                    <span>Size : 443MB</span>
                                </div>
                            ))
                        }

                    
                </div>
            </div>

            <div className='Detailsright'>
                <div className='checkoutdetails'>
                    <div className='Courseimg'>
                        <img alt="" src="../../img/3.jpg"  className='coverimg'/>
                    </div>

                    <div className='Coursedescription'>
                        <span className='Title'>{course && course[0].name}</span>
                        <span className='CourseAuthor'><b>Author</b> : {course && course[0].creator}</span>
                        
                        <span className='price'>${course && course[0].actual_price}</span>
                    </div>

                    <div className='CoursesFooter'>
                        <span className='FooterButton tocard'>
                            <Link to={"/payement/"+id} style={{textDecoration:"none",color:"white"}}>
                                Buy and Download
                            </Link>
                        </span>
                    </div>
                    
                </div>
            </div>

        </div>

    </div>

    <Footer />
    </>
  )
}

export default Details