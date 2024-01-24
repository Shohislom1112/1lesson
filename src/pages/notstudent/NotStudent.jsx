// import React from 'react'
import "./NotStudent.scss"
import notstudent from "../../assets/images/image.jpg"
import { NavLink } from "react-router-dom"

function NotTovar() {
  return (
    <div className='Notstudent'>
        <h3 className='h3'>Not Student</h3>
        <img className="image2" src={notstudent} alt="" />
        <NavLink className="butt" to="addtovar" >Add Student</NavLink>
    </div>
  )
}

export default NotTovar