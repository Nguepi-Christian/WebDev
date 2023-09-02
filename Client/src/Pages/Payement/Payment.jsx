import React, { useContext, useEffect, useState } from 'react'
import './Payment.css'
import Footer from '../../Components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { api, paypal_client_key } from '../../Config'
import { AuthContext } from '../../Context/AuthContext'
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"
import { positions, useAlert  } from 'react-alert'



const Top = () => {
    return(
        <div className="topdetails">
            <Link to="/" style={{textDecoration:"none"}}>
                <h2 className='udefree' ><font color='orange'>Udefree</font></h2>
            </Link>
           
        </div>
    )
}




function Payment() {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const alert = useAlert()
    
    const id = useParams().id

    const [course , setCourse] = useState(null)

    useEffect(() => {
      
      const SingleCourse = async () => {
           const res = await api.get('/courses/one/' + id )
           setCourse(res.data)
      }

      const check = () => {
       !user && navigate('/homepage')
      }
  
      check()

      SingleCourse()

    }, [])

    const p = course && course[0].actual_price;
 

    return (
    <>
        <Top/>

        <div className='payment'>

            <div className='paymentleft'>
                <div className='payoptions'>

                    

                    <div className="orderdetails">
                            <span className='adr'>Course Informations</span>
                            <h2> {course && course[0].name}</h2>
                            <h5>Price : ${course && course[0].actual_price}</h5>
                            <h5>Content advaible after your have made the purshase.</h5>
                    </div>

                    <div className='settings'>
                        {/* <span className='adr'>Select Your Currency</span>
                        <select name="" id="" className='country'>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                        </select> */}
                    </div>

                    

                    <div className='settings'>
                        <span className='adr'>Select Your payment method</span>
                        
                        <PayPalScriptProvider  options={{ "client-id": paypal_client_key}}>
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                    purchase_units: [
                                        {
                                        amount: {
                                            value: p
                                        },
                                        },
                                    ],
                                    });
                                }}
                                onApprove={async (data, actions) => {
                                    const details = await actions.order.capture();
                                    const name = details.payer.name.surname
                                    
                                    const datas =  {
                                        course : course[0] ,
                                        userId : user._id
                                    }
                                    const  paydata ={
                                        coursename : course[0].name ,
                                        price : course[0].actual_price ,
                                        author : course[0].creator , 
                                        userid : user._id
                                    }
                                    try{
                                        await api.post('/payement/add',paydata)
                                        const res = await api.post('/users/add',datas)
                                        localStorage.setItem("user", JSON.stringify(""))
                                        localStorage.setItem("user", JSON.stringify(res.data))
                                        
                                    }catch(error){
                                        console.log(error)
                                    }

                                    alert.success("Done! go to your account",{
                                        timeout : 20000
                                    })
                                    /* const alertMessage = `Trasaction was Sussessfull done You can now go to your page to download Course.
                                     Details -> ${course[0].name}
                                     Price -> ${course[0].actual_price}
                                     The resource(s) is now advaible in your page .

                                    Message : Thank to you ${name}`; */
                                   // alert(alertMessage)
                                   
                                }
                              }
                              onError={async (data, actions) => {
                                    alert.error("Error , Try again !")
                                }
                              }

                              onCancel={async (data, actions) => {
                                alert.info("Canceled  !")
                                }
                            }
                            />
                        </PayPalScriptProvider>
                        {/* <button className='paybutton stripe'>Stripe</button>
                        <button className='paybutton mobile'>Mobile Money</button> */}
                    </div>

                    
                </div>
                <div className='paydata'>
                    Validate your purshase on <b><font color="orange">Udefree</font></b> by selecting a payement method (Paypal for now) and filling out the form . <br />
                    
                </div>
            </div>

            <div className='paymentright'>
               <div className='resume'>
                 <h2 className='resumeitem'>Resume</h2>
                 <h4 className='resumeitem'>Price  : ${course && course[0].actual_price}</h4>
                 <hr />
                 <h4 className='resumeitem'>Total : ${course && course[0].actual_price}</h4>
               </div>
            </div>

           
        </div>

        <Footer/>
    </>
  )
}

export default Payment