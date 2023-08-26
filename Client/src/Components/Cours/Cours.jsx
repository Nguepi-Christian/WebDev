import React, { useState } from 'react';
import Topbar from '../Topbar/Topbar';
import './Cours.css';
import axio_api from '../../axios_conf';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useHistory } from "react-router"

const Cours = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate ,SetIsUpdate] = useState(false)
  const [isdelete , setDelete] = useState(false)
  const [data , setData] = useState([])
  const [word,setWord] = useState("")
  const nav = useNavigate()
  const code = useRef()
  const intitule = useRef()
  const filiere = useRef()
  const specialite = useRef()
  const [id,setId] = useState("")
  //const history = useHistory()

  /*Open Add Modal*/
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  /* End */

  /*Open Update Moadl */
  const openUpdateModal = (id) => {
    SetIsUpdate(true);
    setId(id)
  };

  const closeUpdateModal = () => {
    SetIsUpdate(false);
    setId("")

  };
  /* End */

  /*Open Delete Moadl */
  const openDeleteModal = (id) => {
    setId(id)
    setDelete(true);
  };

  const closeDeleteModal = () => {
    setDelete(false);
    setId('')
  };
  /* End */
console.log(id)
  const Ligne = ({data}) =>{

    return(
      <tr className ="tr">
        <td className ="tr">{data.code}</td>
        <td className ="tr">{data.intitule}</td>
        <td className ="tr">{data.filiere}</td>
        <td className ="tr">{data.specialite}</td>

        <td className='Actions'>
          <button className='action update' name = {data._id } onClick={(e) => openUpdateModal(e.target.name)}>Update</button>
          <button className='action delete' name = {data._id } onClick={(e) => openDeleteModal(e.target.name)}>Delete</button>
        </td>                                                                         
      </tr>
    )
  }

   /*end here*/
   const key = ["code" , "intitule" , "filiere" , "specialite" ]
  
   useEffect(()=>{
 
     const Search = (data) =>  {
       return (
              data.filter((items) => 
                key.some((key) => items[key].toLowerCase().includes(word))
              )
       )
     }
 
     const fecth_cours =  async () => {
         const res = await axio_api.get("/cours/all")
         setData(Search(res.data))
         console.log(data)
     };
 
     
 
     fecth_cours()
     },[word])

  //save cours 
  const Save = async () =>{
      const data_to_save = {
        code:code.current.value,
        intitule: intitule.current.value,
        filiere: filiere.current.value,
        specialite : specialite.current.value
      }

      const res = await axio_api.post("/cours/create",data_to_save)
      console.log(res.data)
      //history.push("/cours")
      nav("/cours")
      setIsOpen(false);
  }

   //save cours 
   const Update = async () =>{

    const data_to_save = {
      id : id ,
      code:code.current.value,
      intitule: intitule.current.value,
      filiere: filiere.current.value,
      specialite : specialite.current.value
    }

    const res = await axio_api.put("/cours/update",data_to_save)
    console.log(res.data)
    setIsOpen(false);
    //history.push("/cours")
  }

  const deletecours = async () =>{
    const data = {
      id : id
    }

    const res = await axio_api.post("/cours/delete",data)
    console.log(res.data)
    setDelete(false)
   // history.push("/cours")
  }

   return (
    <>
    {/* Modal add */}
        <div>
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h3>Ajouter un Cours</h3>
                <div className="body">
                   <div className="modalbody">
                        <input type="text" ref={code} className="textinput" placeholder='Code'/>
                        <input type="text" ref = {intitule} className="textinput" name="" placeholder='Intitule' id="" />
                        <input type="text" name="" id="" ref = {filiere} className="textinput" placeholder="Filiere"/>
                        <input name="" id="" className="textinput" ref = {specialite} placeholder='Specialite'/>
                    </div>

                    <div className="modalfooter" >
                        <button className='action delete' onClick={closeModal}>Quiter</button>
                        <button className='action update' onClick={Save}>Valider</button>
                    </div>
               </div>
              </div>
            </div>
          )}
        </div>
    {/* end */}

    {/* Modalal Update*/}
    <div>
          {isUpdate && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeUpdateModal}>
                  &times;
                </span>
                <h3>Modifier Le Cours</h3>
                <div className="body">
                   <div className="modalbody">
                        <input type="text" ref={code} className="textinput" placeholder='Code'/>
                        <input type="text" ref = {intitule} className="textinput" name="" placeholder='Intitule' id="" />
                        <input type="text" name="" id="" ref = {filiere} className="textinput" placeholder="Filiere"/>
                        <input name="" id="" className="textinput" ref = {specialite} placeholder='Specialite'/>    
                    </div>

                    <div className="modalfooter" >
                        <button className='action delete' onClick={closeUpdateModal}>Quiter</button>
                        <button className='action update' onClick={Update}>Modifier</button>
                    </div>
               </div>
              </div>
            </div>
          )}
        </div>
      {/* end */}


      {/* Modalal Delete*/}
    <div>
          {isdelete && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeDeleteModal}>
                  &times;
                </span>
                <h3>Confirmez la Suppression</h3>
                <div className="body">
                   <p>Voulez-Vous vraiment Supprimer  Cours ?</p>

                    <div className="modalfooter" >
                        <button className='action delete' onClick={deletecours}>Oui</button>
                        <button className='action update' onClick={closeDeleteModal}>Non</button>
                    </div>
               </div>
              </div>
            </div>
          )}
        </div>
      {/* end */}


        <Topbar/>
          <div className='ButonContainer'>
            <h2>Gestion des Cours</h2>
            <button className='button' onClick={openModal}>Ajouter un Cours</button>
          </div>
          <div className="TableContainer">

            <div className='Search'>
              <input type="search" name="" placeholder='Rechercher un Cours' id="" className='inputSearch' onChange={(e)=>setWord(e.target.value)}/>
              <button className="SearchButton">Search</button>
            </div>
              
              <table className="Table">
                  <tr className ="tr">
                      <th className ="th">Code</th>
                      <th className ="th">Intitule</th>
                      <th className ="th">Filiere</th>
                      <th className ="th">Specialite</th>
                      <th className ="th">Actions</th>                                                                         
                  </tr>
                  {
                  data && data.map((element, index) => (
                      <Ligne key={index} data={element}/>
                ))}
                  
              </table>

          </div>
    
    </>
  );
  
};

export default Cours;


