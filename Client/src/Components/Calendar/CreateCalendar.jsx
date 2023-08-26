import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import { ScheduleComponent, RecurrenceEditorComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Inject, PopupOpenEventArgs, EventSettingsModel,DragAndDrop,
  Resize } from '@syncfusion/ej2-react-schedule';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { AutoComplete, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { useEffect } from 'react';
import axio_api from '../../axios_conf';
import { L10n } from '@syncfusion/ej2-base';
import { useState } from 'react';
import axios from 'axios';
import {AutoCompleteComponent} from '@syncfusion/ej2-react-dropdowns'
import {
  FILIERE, SPECIALITE ,FACULTE
} from "../../data.js"

L10n.load({
  'en-US': {
    'schedule': {
      'saveButton': 'Valider',
      'cancelButton': 'Fermer',
      'deleteButton': 'Remove',
      'newEvent': 'Nouvel Evenement ',
    },
  }
});



const CreateCalendar = () => {
  
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
  //sera utiliser pour checker la disponibilite des contraintes
  const [planing,setPlaning] = useState([])
  const [salle,setSalles] = useState([])
  const [cours,setCours] = useState([])
  // const [array,setArray] = useState([])

  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {
      scheduleObj.current.eventWindow.recurrenceEditor = recurrObject.current;
    }
  }
   
  
   //load all data timetable of db
   useEffect(()=>{
    const fecth_timetable =  async () => {
        const res = await axio_api.get("/timetable/all")
        setData(res.data)
    };

    const fecth_salle =  async () => {
      const res = await axio_api.get("/salles/all")
      setSalles(res.data)
      
   };

   const fecth_cours =  async () => {
    const res = await axio_api.get("/cours/all")
    setCours(res.data)
    //console.log(res)
   };
    const fecth_planing = async ()=>{
      const res  = await axio_api.get("/planing/all")
      setPlaning(res.data)
    }
    fecth_salle()
    fecth_cours()
    fecth_timetable()
    fecth_planing()
},[])


 const fields ={value : 'nom'}
  //Custom editor 
  const editorTemplate = (props) => {
    return (props !== undefined ? (
      <table className="custom-event-editor" style={{}}>
        <tbody>
          <tr>
            <td className="e-textlabel"><b>Enseignant</b></td>
            <td colSpan={4}>
              <input id="Summary" className="e-field e-input" type="text" name="Subject" 
               style={{}} />
            </td>
          </tr>

          <tr>
            <td className="e-textlabel"><b>Matiere</b></td>
            <td colSpan={4}>
              <textarea
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
              <DropDownListComponent
                id="EventType"
                placeholder="Choisir La Salle"
                data-name="Status"
                className="e-field"
                style={{}}
                dataSource={['S006', 'S008', 'A135','A350','S003','A250','R110','R108']}
              />
            </td>
          </tr>

          <tr>
            <td className="e-textlabel"><b>De</b></td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="StartTime"
                data-name="StartTime"
                ref={startObj}
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel"><b>A</b></td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="EndTime"
                data-name="EndTime"
                ref={endObj}
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel"><b>Recurrence</b></td>
            <td colSpan={4}>
              <RecurrenceEditorComponent ref={recurrObject} id="RecurrenceEditor" />
            </td>
          </tr>
          
        </tbody>
      </table>
    ) : '');
  };

 
const data = [
  {}
]

var tab = []
var eventSettings = { dataSource : data }

  //load all data courses of db
  //load all datasalle of db
  //save data into db
  const save = async () => {
    //object to save
    const data_to_save = {
      filiere : filiere.current.value ,
      niveau : niveau.current.value ,
      faculte :faculte.current.value ,
      specialite : specialite.current.value ,
      semestre  : semestre.current.value ,
      data : eventSettings.dataSource
    }

    
    if(data_to_save.data==="undefined" || data_to_save.filiere ==="" || data_to_save.niveau === "" || 
        data_to_save.semestre==="" || data_to_save.specialite ===""){
          alert("il n'est pas possible de sauvegarder des donnees vide")
    }else{
      //
      saveArray()
      const res = axio_api.post("/timetable/create",data_to_save)
      alert("le serveur :"+res.data)
      
    }
    
    
  }


  //envoyer les nouvelle au serveur
  const saveArray = () => {
     tab.forEach( async (element) => {
      await axio_api.post('/planing/create',element)
     });
  }
 
  //Save new task
  const onPopupClose = (args) => {
    //console.log(args)
    if (args.type === 'Editor' && !isNullOrUndefined(args.data)) {
      let subjectElement = args.element.querySelector('#Summary');
      if (subjectElement) {
        args.data.Subject = subjectElement.value;
      }
      let statusElement = args.element.querySelector('#EventType');
      if (statusElement) {
        args.data.EventType = statusElement.value;
      }
      args.data.StartTime = startObj.current.value;
      args.data.EndTime = endObj.current.value;
      let descriptionElement = args.element.querySelector('#Description');
      if (descriptionElement) {
        args.data.Description = descriptionElement.value;
      }
     //sera utiliser pour les update 
    const newData = {
      id : Math.random()*100 ,
      description : descriptionElement.value,
      event : statusElement.value ,
      subject : subjectElement.value,
      StartTime : startObj.current.value,
      EndTime : endObj.current.value,
      recurrence : recurrObject.current.value ,
      day : startObj.current.value,
      niveau : niveau.current.value ,
      faculte : faculte.current.value ,
      filiere :filiere.current.value ,
      semestre : semestre.current.value
    }
    console.log(newData)
    tab.push(newData)
  } 
}



const onActionBegin = (args) => {
  if (args.requestType === 'eventCreate' && args.data.length > 0) {
      let eventData = args.data[0];
      let eventField = scheduleObj.current.eventFields;
      let startDate = eventData[eventField.startTime];
      let endDate = eventData[eventField.endTime];
      args.cancel = !scheduleObj.current.isSlotAvailable(startDate, endDate);
  }
}
 

  return (

  <>
  <div className="topOPtionbar">
      <span className='modification'>Planification</span>
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

    </div>
    
    <ScheduleComponent 
      width='100%' 
      height='550px' 
      ref={scheduleObj}
      eventSettings={eventSettings} 
      editorTemplate={editorTemplate} 
      showQuickInfo={false}
      popupOpen={onPopupOpen}
      popupClose={onPopupClose} 
      actionBegin={onActionBegin}
      >
    
      <ViewsDirective>
        <ViewDirective option='Week' startHour='07:00' endHour='23:00'/> 
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month ,DragAndDrop,Resize]} />
    </ScheduleComponent>
    
    <div onClick={save} className="updatebutton">Sauvegarder</div>
  </>
  )
};



export default CreateCalendar;