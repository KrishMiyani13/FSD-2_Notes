import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Myapp() {
  const name = "Emliy copuuer"
  const myStyle = {
    color: "red",
    backgroundColor: "black"}
  return (
    <>
    <img src={heroImg} alt="Hero" />
    <li> Apple</li>
    <input type="submit" value="Submit" />
    <p style={myStyle}> Hello {name}</p>
    </>
  )
}
export default Myapp
