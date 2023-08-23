import Spiner from '../Spinner/Spiner'
import React, { useEffect, useState } from 'react'
import './CoursesList.css'
import Courses from '../Courses/Courses'
import {api} from "../../Config.js"


export default function CoursesList() {

  const [courses,setCourses]  =  useState([])
  const [option, setOPtion] = useState("all")
  const [expression, setExpression] = useState("")
  const [langage,setLangage] = useState("english")

  useEffect(() => {
    
    const LoadAllCourses = async () => {
          const res = await api.get('/courses/all')
          setCourses(res.data)
    }

    LoadAllCourses()
  }, [])

  const filter = (option , expression , langage , data) => {
    
    if(expression !== ""){
      return (
        data.filter((item) => item.name.includes(expression) && 
                    (item.langage===langage))
      )
    }
    
    if(option === "all"){
      return data
    }else{
      return (
        data.filter((item) => item.category === option && 
                    (item.langage === langage))
      )
    }
  }
  
  
 //console.log(filter(option,expression,langage,courses))

  return (
    <div className='CoursesList'>
        <div className='CourseCategorie'>
           <div className="listfilter">
            <div className='filteroptions'>
                <span className='filtertitile'>Category </span>
                <select name="" id="" className='options' onChange={(e) => setOPtion(e.target.value)}>
                  <option value="all">All</option>
                  <option value="Web Devloppement">Web Devloppement</option>
                  <option value="Mobile Devloppement">Mobile Devloppement</option>
                  <option value="Game Developement">Game Developement</option>
                  <option value="Python">Python</option>
                  <option value="Machine Learning">Machine Learning / AI</option>
                  <option value="java">Java</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Finances">Finances</option>
                  <option value="Graphic">Graphic</option>
                  <option value="Data Structures">DataStructures and Algorithms</option>
                  <option value="Cybersecurity">Cybersecurity </option>
                  <option value="Network">Network </option>
                  <option value="Marketing">Marketing </option>
                </select>
            </div>

            <div className='filteroptions'>
                <span className='filtertitile'>Language </span>
                <select name="" id="" className='options langage' onChange={(e) => setLangage(e.target.value)}>
                  <option value="francais">Francais</option>
                  <option value="english">Anglais</option>
                </select>
            </div>
          </div>

          <div className="search">
              <input 
                type="search" 
                name="" 
                className='Searchinput' 
                placeholder='Search Courses' 
                id="" 
                onChange={(e) => setExpression(e.target.value)}
              />
          </div>
        </div>

        <div className='list'>
          {
            (
              filter(option,expression,langage,courses).map((item)=>(
                <Courses data={item} key={item._id}/>
              ))
            ) 
          }
        </div>

    </div>
  )
}
