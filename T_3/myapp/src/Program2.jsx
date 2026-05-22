import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Program2() {
  const students = [{id:1,name:'abc',std:5},
                    {id:1,name:'Emly',std:2},
                    {id:1,name:'Sergio',std:10},
                    {id:1,name:'Andres',std:5}

  ]
  return (
    <div>
        <h2>Student Data</h2>
        {
            students.filter((student)=> student.std === 5).map((student)=>
            <div key={student.id}>
                <h2>Student Name: {student.name}</h2>
                <h2>Student Std: {student.std + 1}</h2>                
            </div>
            )
        }
    </div>
  )
}
export default Program2
