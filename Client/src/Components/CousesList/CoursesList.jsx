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
        data.filter((item) => item.name.toLowerCase().includes(expression) && 
                    (item.langage.toLowerCase()===langage))
      )
    }
    if(option === "all"){
      return data
    }else{
      return (
        data.filter((item) => item.category.toLowerCase() === option && 
                    (item.langage.toLowerCase()===langage))
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
                  <option value="programming">Programming</option>
                  <option value="web devloppement">Web Devloppement</option>
                  <option value="game developement<">Game Developement</option>
                  <option value="python">Python</option>
                  <option value="machine learning">Machine Learning</option>
                  <option value="java">Java Courses</option>
                  <option value="javascript">JavaScript Courses</option>
                  <option value="dataStructures">DataStructures</option>
                  <option value="algorithms">Algorithms</option>
                  <option value="cybersecurity">Cybersecurity </option>
                  <option value="bug bounty">Bug Bounty</option>
                  <option value="nodejs">Nodejs</option>
                  <option value="php">Php</option>
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
