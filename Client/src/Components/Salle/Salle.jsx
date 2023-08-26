import React, { useState ,useRef, useEffect } from 'react';
import Topbar from '../Topbar/Topbar';
import './Salle.css'
import axio_api from '../../axios_conf';
import { useNavigate } from 'react-router-dom';



const Salle = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate ,SetIsUpdate] = useState(false)
  const [isdelete , setDelete] = useState(false)
  const [data , setData] = useState([])
  const [word,setWord] = useState("")
  const nom = useRef()
  const capacite = useRef()
  const faculte = useRef()
 
  const [id,setId] = useState("")
  const nav = useNavigate()
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
  };
  /* End */

  

  const Ligne = ({data}) =>{

    return(
      <tr className ="tr">
        <td className ="tr">{data.nom}</td>
        <td className ="tr">{data.capacite}</td>
        <td className ="tr">{data.faculte}</td>
        <td className='Actions'>
          <button className='action update' name = {data._id } onClick={(e) => openUpdateModal(e.target.name)}>Update</button>
          <button className='action delete' name = {data._id } onClick={(e) => openDeleteModal(e.target.name)}>Delete</button>
        </td>                                                                         
      </tr>
    )
  }
 
  const Save = async () =>{
    const data_to_save = {
      nom  :nom.current.value,
      capacite : capacite.current.value,
      faculte : faculte.current.value,
    }

    const res = await axio_api.post("/salles/create",data_to_save)
    console.log(res.data)
    //history.push("/cours")
    setIsOpen(false);
    nav("/salle")
}

/* */
const key = ["nom" , "capacite" , "faculte"]
  
   useEffect(()=>{
 
     const Search = (data) =>  {
       return (
              data.filter((items) => 
                key.some((key) => items[key].toLowerCase().includes(word))
              )
       )
     }
 
     const fecth_cours =  async () => {
         const res = await axio_api.get("/salles/all")
         setData(Search(res.data))
         console.log(data)
     };
 
     
 
     fecth_cours()
     },[word])


 //save cours 
 const Update = async () =>{

  const data_to_save = {
    id : id ,
    nom  :nom.current.value,
    capacite : capacite.current.value,
    faculte : faculte.current.value,
  }

  const res = await axio_api.put("/salles/update",data_to_save)
  console.log(res.data)
  setIsOpen(false);
  //history.push("/cours")
}

const deletesalle = async () =>{
  const data = {
    id : id
  }

  const res = await axio_api.post("/salles/delete",data)
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
                <h3>Ajouter une Salle</h3>
                <div className="body">
                   <div className="modalbody">
                        <input type="text" className="textinput" ref={nom} placeholder='Salle'/>
                        <input type="text" className="textinput" name="" ref={capacite} placeholder='Capacite' id="" />
                        <select name="" id="" className="textinput"b ref={faculte}>
                          <option value="science">Fac Sciences</option>
                          <option value="lettre">Fac Lettres</option>
                        </select>
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
                <h3>Modifier Salle</h3>
                <div className="body">
                   <div className="modalbody">
                        <input type="text" className="textinput" ref ={nom} placeholder='Salle'/>
                        <input type="text" className="textinput" ref={capacite} name="" placeholder='Capacite' id="" />
                        <select name="" id="" className="textinput" ref={faculte}>
                          <option value="science">Fac Sciences</option>
                          <option value="lettre">Fac Lettres</option>
                        </select>
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
                   <p>Voulez-Vous vraiment Supprimer cette Salle ?</p>

                    <div className="modalfooter" >
                        <button className='action delete' onClick={deletesalle}>Oui</button>
                        <button className='action update' onClick={closeDeleteModal}>Nom</button>
                    </div>
               </div>
              </div>
            </div>
          )}
        </div>
      {/* end */}


        <Topbar/>
          <div className='ButonContainer'>
            <h2>Gestion des Salles</h2>
            <button className='button' onClick={openModal}>Ajouter un Salle</button>
          </div>
          <div className="TableContainer">

            <div className='Search'>
              <input type="search" name="" placeholder='Rechercher une Salle' id="" className='inputSearch' onChange={(e)=>setWord(e.target.value)}/>
              <button className="SearchButton">Search</button>
            </div>
              
              <table className="Table">
                  <tr className ="tr">
                      <th className ="th">Nom</th>
                      <th className ="th">Capacite</th>
                      <th className ="th">Faculte</th>
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

export default Salle;
