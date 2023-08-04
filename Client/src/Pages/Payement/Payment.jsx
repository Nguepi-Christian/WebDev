import React, { useContext, useEffect, useState } from 'react'
import './Payment.css'
import Footer from '../../Components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { api } from '../../Config'
import { AuthContext } from '../../Context/AuthContext'
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"



const Top = () => {
    return(
        <div className="topdetails">
            <Link to="/" style={{textDecoration:"none"}}>
                <h2 className='udefree'>KnowlageMarketplace</h2>
            </Link>
           
        </div>
    )
}




function Payment() {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

   
    const id = useParams().id

    const [course , setCourse] = useState(null)
    const [isApprove , setIsApprove ] = useState(false)
   
    useEffect(() => {
      
      const SingleCourse = async () => {
           const res = await api.get('/courses/one/' + id )
           setCourse(res.data)
      }

      const check = () => {
        !user && navigate('/')
      }
  
      check()

      SingleCourse()

    }, [])

    const payCourse = () =>{
        
        if(isApprove){
            //insert course data to user course array

            const data =  {
                course : course[0] ,
                userId : user._id
            }
            console.log(data)
            try{
                const res = api.post('/users/add',data)
                console.log(res.data)
            }catch(error){
                console.log(error)
            }
            
            //shwo msg "course added to your account"
        }
        
    }
    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => {
        setIsOpen(false);
    };

    
 
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
                            <h5>Contain advaible after your have pourshase</h5>
                    </div>

                    <div className='settings'>
                        {/* <span className='adr'>Select Your Currency</span>
                        <select name="" id="" className='country'>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                        </select> */}
                    </div>

                    

                    <div className='settings'>
                        <span className='adr'>Select Your payement method</span>
                        {/* <button className='paybutton' onClick={(e) => payCourse()}>Paypal</button> */}
                        <PayPalScriptProvider  options={{ "client-id":"AW671_f_kbI3ow8HmLzw00GXGttKLmk5gdY0WfnV0HyPCCKGoZc9jm5rsaSgvmqG43AGiHncYjPOm61q"}}>
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
                                    console.log(datas)
                                    try{
                                        const res = await api.post('/users/add',datas)
                                        console.log(res.data)
                                    }catch(error){
                                        console.log(error)
                                    }
                                    const alertMessage = `Trasaction was Sussessfull done You can now go to your page to download Course.
                                     Details -> ${course[0].name}
                                     Price -> ${course[0].actual_price}
                                     The resource(s) is now advaible in your page .

                                    Message : Thank to you ${name}`;
                                    alert(alertMessage)
                                   
                                }
                              }
                            />
                        </PayPalScriptProvider>
                        {/* <button className='paybutton stripe'>Stripe</button>
                        <button className='paybutton mobile'>Mobile Money</button> */}
                    </div>

                    
                </div>
                <div className='paydata'>
                    Vous etes sur le point de valider votre achat sur <b>KnowlageMarketplace</b>. <br />
                    Veuillez selectionnez un mode de payement et de remplir le formulaire qui s'affichera.
                    les payement africain sont assures par les solutions de payement MTN et ORANGE
                </div>
            </div>

            <div className='paymentright'>
               <div className='resume'>
                 <h2 className='resumeitem'>Resume</h2>
                 <h4 className='resumeitem'>Prix  : ${course && course[0].actual_price}</h4>
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