import React, { useRef } from 'react'
import axio_api from '../../axios_conf';
import Topbar from "../../Components/Topbar/Topbar"
export default function Demande() {


    const scheduleObj = useRef(null);
    const recurrObject = useRef(null);
    const [dataobj , setData] = React.useState(null)
    const startObj = useRef(null);
    const endObj = useRef(null);
    //options saving settings
    const faculte = useRef()
    const niveau = useRef()
    const filiere = useRef()
    const specialite = useRef()
    const semestre = useRef()

    const enseignant = useRef()
    const salle = useRef()
    const hd = useRef()
    const hf = useRef()
    const desc = useRef()
    const cours = useRef()

    const onsubmitpost = async () =>{

        const post ={
            salle : salle.current.value ,
            hd : hd.current.value ,
            hf : hf.current.value ,
            desc : desc.current.value ,
            cours : cours.current.value ,
            enseignant : enseignant.current.value ,
            niveau : niveau.current.value ,
            faculte : faculte.current.value ,
            filiere :filiere.current.value ,
            semestre : semestre.current.value
        }

        console.log(post)
        const  res = await axio_api.post("/reservation/create",post)
        alert(res.data)
    }

  return (
    <>
    

     <div className="demande">


        <div className="OptionsSettings">

            <select name="" id="" ref={faculte}>
            <option value="">Faculte</option>
            <option value="Fac-Sciences">FAC SCIENCES</option>
            <option value="Fac-Lettres">FAC LETTRE</option>
            </select>

            <select name="" id="" ref={filiere}>
            <option value="">Filiere</option>
            <option value="INFORMATIQUES">INFORMATIQUES</option>
            <option value="MATHEMATIQUES">MATHEMATIQUES</option>
            <option value="HISTOIRE">HISTOIRE</option>
            <option value="CHIMIE">CHIMIE</option>
            <option value="PHYSIQUES">PHYSIQUES</option>
            <option value="GEOGRAPHIE">GEOGRAPHIE</option>
            
            </select>

            <select name="" id="" ref={specialite}>
            <option value="">Specialite</option>
            <option value="DATA SCIENCES">DATA SCIENCES</option>
            <option value="GENIE LOGICIEL">GENIE LOGICIEL</option>
            <option value="SECURITE">SECURITE</option>
            <option value="GENERALE">GENERALE</option>
            <option value="RESEAUX">RESEAUX</option>
            <option value="ANALYSE">ANALYSE</option>
            </select>

            <select name="" id="" ref={semestre}>
            <option value="">Semestre</option>
            <option value="1">1</option>
            <option value="2">2</option>
            </select>

            <select name="" id="" ref ={niveau}>
            <option value="">Niveau</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>
            <option value="M1">M1</option>
            <option value="M2">M2</option>
            </select>
        </div>
        <div>
           
              <table className="custom-event-editor demande" style={{}}>
                <tbody>
                <tr>
                    <td className="e-textlabel"><b>Enseignant</b></td>
                    <td colSpan={4}>
                    <input id="Summary" ref={enseignant} className="e-field e-input" type="text" name="Subject" style={{}} />
                    </td>
                </tr>

                <tr>
                    <td className="e-textlabel"><b>Matiere</b></td>
                    <td colSpan={4}>
                    <textarea
                        ref={cours}
                        id="Description"
                        className="e-field e-input"
                        name="Description"
                        rows={1}
                        cols={50}
                        style={{}}
                    />
                    </td>
                </tr>

                <tr>
                    <td className="e-textlabel"><b>Salle</b></td>
                    <td colSpan={4}>
                        <select name="" id="" className="e-field" ref={salle}>
                            <option value="">SALLE</option>
                            <option value="S005">S005</option>
                            <option value="S006">S006</option>
                            <option value="A135">A135</option>
                            <option value="A250">A250</option>
                            <option value="A350">A350</option>
                            
                        </select>
                    </td>
                </tr>

                <tr>
                    <td className="e-textlabel"><b>De</b></td>
                    <td colSpan={4}>
                        <input type="time" name="" id="" ref={hd}  placeholder='Heure de debut'/>
                    </td>
                </tr>
                <tr>
                    <td className="e-textlabel"><b>A</b></td>
                    <td colSpan={4}>
                        <input type="time" name="" id=""  ref ={hf} placeholder='Heure de fin'/>
                    </td>
                </tr>
                <tr>
                    <td className="e-textlabel"><b>Description</b></td>
                    <td colSpan={4}>
                        <textarea type="time" name="" id=""  ref={desc} placeholder='description'/>
                    </td>
                </tr>
               
                
                </tbody>
             </table>

                <div className="updatebutton" onClick={onsubmitpost}>
                    Soumettre
                </div>

          
        </div>

     </div>
    </>
  )
}
