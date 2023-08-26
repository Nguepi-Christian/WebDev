import { 
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject ,
  DragAndDrop,
  Resize,
  ViewDirective,
  ViewsDirective, 
  RecurrenceEditorComponent,EventSettingsModel,PopupOpenEventArgs
} from '@syncfusion/ej2-react-schedule';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {useEffect , useRef}from 'react';
import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import { L10n } from '@syncfusion/ej2-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import './Calendar.css'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from 'react';
import axio_api from '../../axios_conf';


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




const Calendar = () => {

  const scheduleObj = useRef(null);
  const recurrObject = useRef(null);
  const [dataobj , setData] = useState(null)

  //options saving settings
  const faculte = useRef()
  const niveau = useRef()
  const filiere = useRef()
  const spacialite = useRef()
  const semestre = useRef()
   
  const id = useParams()


  const onPopupOpen = (args) => {
    if (args.type === 'Editor') {
      scheduleObj.current.eventWindow.recurrenceEditor = recurrObject.current;
    }
  }

  const startObj = useRef(null);
  const endObj = useRef(null);

  //Custom editor 


  //load all data timetable of db
  useEffect(()=>{
      const fecth_one_timetable =  async () => {
          const res = await axio_api.post("/timetable/one",{_id : id})
          setData(res)
          console.log(res.data)
      };

      fecth_one_timetable()
      
  },[])
 

  var eventSettings = null;

  if(dataobj){
    eventSettings = { dataSource : dataobj.data[0].data }
  }
  
  //load all data courses of db

  //load all datasalle of db

//Custom editor 
const editorTemplate = (props) => {
  return (props !== undefined ? (
    <table className="custom-event-editor" style={{}}>
      <tbody>
        <tr>
          <td className="e-textlabel"><b>Enseignant</b></td>
          <td colSpan={4}>
            <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{}} />
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
              dataSource={['S006', 'S008', 'A135']}
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
var tab = []
  //save data into db
  const save_update = async () => {
    //object to save
    const data_to_up = {
      id : id.id ,
      filiere : dataobj.data[0].filiere,
      niveau : dataobj.data[0].niveau ,
      faculte :dataobj.data[0].faculte,
      spacialite : dataobj.data[0].spacialite,
      semestre  : dataobj.data[0].semestre ,
      data : eventSettings.dataSource
    }

    saveArray()
    const res = await axio_api.put("/timetable/update",data_to_up)

    console.log(res)
  }

  const saveArray = () => {
    tab.forEach( async (element) => {
     await axio_api.post('/planing/update',element)
    });
  }

  
  //Save task
  const onPopupClose = (args) => {
    console.log(args)
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
        const updatedata = {
          id : args.data.Id ,
          description : descriptionElement.value,
          event : statusElement.value ,
          subject : subjectElement.value,
          StartTime : startObj.current.value,
          EndTime : endObj.current.value,
          recurrence : recurrObject.current.value,
          day : startObj.current.value,
          filiere : dataobj.data[0].filiere,
          niveau : dataobj.data[0].niveau ,
          faculte :dataobj.data[0].faculte,
          specialite : dataobj.data[0].specialite,
          semestre  : dataobj.data[0].semestre 
      }
      console.log(updatedata)
      tab.push(updatedata)
     // saveArray()
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
    <span className='modification'>Mise a Jour</span>

      <div className="OptionsSettings">
            <span>Faculte :  {dataobj && dataobj.data[0].faculte}</span>
            <span>Filiere :  {dataobj && dataobj.data[0].filiere}</span>
            <span>Specialite :  {dataobj && dataobj.data[0].specialite}</span>
            <span>Semestre :  {dataobj && dataobj.data[0].semestre}</span>
            <span>Niveau :  {dataobj && dataobj.data[0].niveau}</span>
      </div>

    </div>
    
    <ScheduleComponent 
      width='100%' 
      height='550px' 
      ref={scheduleObj}
      eventSettings={eventSettings} 
      showQuickInfo={false}
      editorTemplate={editorTemplate} 
      popupOpen={onPopupOpen}
      actionBegin={onActionBegin}
      popupClose={onPopupClose}
      >
      <ViewsDirective>
        <ViewDirective option='Week' startHour='07:00' endHour='23:00'/> 
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month ,DragAndDrop,Resize]} />
    </ScheduleComponent>
    
    <div onClick={save_update} className="updatebutton"> Sauvegarder les modifications </div>
  </>
  )
};



export default Calendar;

