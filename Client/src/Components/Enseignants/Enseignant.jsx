import React, { useState , useRef, useEffect } from 'react';
import axio_api from '../../axios_conf';
import Topbar from '../Topbar/Topbar';
import {useNavigate} from "react-router-dom"


const Enseignant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate ,SetIsUpdate] = useState(false)
  const [isdelete , setDelete] = useState(false)
  const [data , setData] = useState([])
  const [word,setWord] = useState("")
  const [id,setId] = useState("")
  //
  const nav = useNavigate()

  const nom = useRef()
  const email = useRef()
  const prenom =  useRef()
  const specialite= useRef()
  const grade = useRef()
  const cours =[]

  /*Open Add Modal*/
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  /* End */

  /*Open Update Moadl */
  const openUpdateModal = () => {
    SetIsUpdate(true);
  };

  const closeUpdateModal = () => {
    SetIsUpdate(false);
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

  const Ligne = ({data}) =>{
    
    return(
      <tr className ="tr">
        <td className ="tr">{data.nom}</td>
        <td className ="tr">{data.prenom}</td>
        <td className ="tr">{data.specialite}</td>
        <td className ="tr">{data.grade}</td>
        <td className='Actions'>
          <button className='action delete' name={data._id} onClick={(e) => openDeleteModal(e.target.name)}>Delete</button>
        </td>                                                                         
      </tr>
    )
  }

  const key = ["nom" , "prenom" , "grade" , "specialite" ]
  useEffect(()=>{
 
    const Search = (data) =>  {
      return (
             data.filter((items) => 
               key.some((key) => items[key].toLowerCase().includes(word))
             )
      )
    }

    const fecth_cours =  async () => {
        const res = await axio_api.get("/enseignant/all")
        setData(Search(res.data))
        //console.log(data)
    };

    

    fecth_cours()
    },[word])

  //Save enseignant
  const save = async () =>{
    
    const data_to_save = {
      nom:nom.current.value,
      email: email.current.value,
      prenom: prenom.current.value,
      specialite :specialite.current.value,
      grade:grade.current.value,
      password:nom.current.value +'UY1',
      cours : []
    }

    const res = await axio_api.post("/enseignant/register",data_to_save)
    console.log(res.data)
    //history.push("/enseignant")
    nav("/enseignant")
    setIsOpen(false);
}

//delete
const deleteenseignant = async () =>{
  const data = {
    id : id
  }

  const res = await axio_api.post("/enseignant/delete",data)
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
                <h3>Ajouter un enseignant</h3>
                <div className="body enseignant">
                   <div className="modalbody">
                        <input type="text" className="textinput" placeholder='Nom(s)' ref = {nom} required/>
                        <input type="text" className="textinput" placeholder='Prenom(s)' ref={prenom} required/>
                        <input type="email" className="textinput" placeholder='email'  ref = {email}required/>
                        <select name="" id="" className="textinput" placeholder='' ref ={specialite}>
                          <option value="">-----{'>'} Specialite</option>
                          <option value="GL">Genie Logiciel</option>
                          <option value="RA">Reseaux et autres</option>
                        </select>

                        <select name="" id="" className="textinput" ref ={grade}>
                          <option value="">-----{">"} Grade</option>
                          <option value="dr">Docteur</option>
                          <option value="pr">Professeur</option>
                        </select>
                    </div>

                    <div className="modalfooter" >
                        <button className='action delete' onClick={closeModal}>Quiter</button>
                        <button className='action update' onClick={save}>Valider</button>
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
                        <input type="text" className="textinput" placeholder='Salle'/>
                        <input type="text" className="textinput" name="" placeholder='Capacite' id="" />
                        <select name="" id="" className="textinput">
                          <option value="science">Fac Sciences</option>
                          <option value="lettre">Fac Lettres</option>
                        </select>
                    </div>

                    <div className="modalfooter" >
                        <button className='action delete' onClick={closeUpdateModal}>Quiter</button>
                        <button className='action update'>Modifier</button>
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
                   <p>Voulez-Vous vraiment Supprimer ?</p>

                    <div className="modalfooter" >
                        <button className='action delete' onClick={deleteenseignant}>Oui</button>
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
            <h2>Gestion des Enseignants</h2>
            <button className='button' onClick={openModal}>+ Enseignant</button>
          </div>
          <div className="TableContainer">

            <div className='Search'>
            <input type="search" name="" placeholder='Rechercher un enseignant' id="" className='inputSearch' onChange={(e)=>setWord(e.target.value)}/>

              <button className="SearchButton">Search</button>
            </div>
              
              <table className="Table">
                  <tr className ="tr">
                      <th className ="th">Nom(s)</th>
                      <th className ="th">Prenom(s)</th>
                      <th className ="th">Specialite</th>
                      <th className ="th">Grade</th>  
                      <th className ="th">Action</th>                                                                          
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

export default Enseignant;
