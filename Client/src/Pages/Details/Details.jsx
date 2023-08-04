import React, { useEffect, useState } from 'react'
import './Details.css'
import Footer from '../../Components/Footer/Footer'
import { api } from '../../Config.js'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'


const Top = () => {
    return(
        <div className="topdetails">
            <Link to="/" style={{textDecoration:"none"}}>
                 <h2 className='udefree'>KnowlageMarketplace</h2>
            </Link>
           
        </div>
    )
}

function Details() {

    const [course , setCourse] = useState(null)
    const id = useParams().id

    useEffect(() => {
      
      const SingleCourse = async () => {
           const res = await api.get('/courses/one/' + id )
           setCourse(res.data)
      }

      SingleCourse()

    }, [])

  return (
    <>
    <div className='Details'>
        <Top/>

        <div className='MainDetails'>

            <div className='detailsContainer'>
                <h5 className='itempath'>Categorie : {course && course[0].category}</h5>
                <h1 className='itemTitle'>
                   {course && course[0].name}
                </h1>
                <p className='itemdesc'>
                     {course &&  course[0].description}
                </p>

                <span className='itemperson'>Downloads : {course && course[0].students} </span>
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
                    <p className='waylearn'>After this Course Students can:</p>
                
                    <div className='learnlist'>
                        <ul className='listskill'>
                        {
                            course && course[0].what_you_will_learn.map((item) => (
                                <li>{item}</li>
                            ))
                        }
                            
                        </ul>
                    </div>
                </div>
                <div className='itempart'>
                    <p className='partlearn'>Part of this cours</p>
                
                   
                        
                        {
                            course && course[0].part.map((item) => (
                                <div className='partskill'>
                                    <span>{item.name}</span>
                                    <span>Size : 443MB</span>
                                </div>
                            ))
                        }

                    
                </div>
            </div>

            <div className='Detailsright'>
                <div className='checkoutdetails'>
                    <h3 className='checkoutitle'>
                        {course && course[0].name}
                    </h3>
                    <span className='price'>Price  : ${course && course[0].actual_price}</span>
                    <button className='FooterButton tocard'>
                        <Link to={"/payement/"+id} style={{textDecoration:"none"}}>
                            Buy and Download
                        </Link>
                    </button>
                    <p className='terms'>
                        Une fois acheter , vous avez acces en mode telechargement
                        tant que votre compte est sur notre systeme , vous pouvez aceder a tout moment.
                    </p>

                    
                </div>
            </div>

        </div>

    </div>

    <Footer />
    </>
  )
}

export default Details