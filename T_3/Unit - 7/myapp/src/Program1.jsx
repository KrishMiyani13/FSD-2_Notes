import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Program1() {
  const Wellcome = "welcome to the Program1"
  const myStyle = {
    color: "red"}
  return (
    <>
    <h1>{Wellcome}</h1>
    <ul style={myStyle}>
        <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
    <img src={heroImg} alt="" height='100px' />
    <img src="download.png" height="350px" width="500px" alt="" />
    </>
  )
}
export default Program1
