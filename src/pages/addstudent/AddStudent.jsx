// import React from 'react'
// import {  } from "react-loader-spinner"
import { useState } from "react";
import "./AddStudent.scss"
import { NavLink } from "react-router-dom";
function AddTovar() {
  // const navigate = <Navigate/>
  const [data, setData] = useState({
    name: '',
    username: '',
    brend: '',
    category:'',
    cost: '',
    stock:'' 
  });



  return (
    <div className="addtovar">
      <div className="addinput">

      <div className="input">
      <div className="input_second">
        <div className="tt">
        <label htmlFor=""className="lab">FirstName <p className="red">*</p></label>
      <input
          className="usern"
          aria-label="Бренд *"
          type="text"
          id="Бренд"
          name="Бренд"
          value={data.brend}
          onChange={(e) => setData((prevData) => ({ ...prevData, brend: e.target.value }))}
        />
        </div>
        <div className="tt">
        <label htmlFor=""className="lab">Lastname <p className="red">*</p></label>
        <input
          className="usern"
          aria-label="Артикул производителя  *"
          type="text"
          id="Артикул"
          name="Артикул"
          value={data.category}
          onChange={(e) => setData((prevData) => ({ ...prevData, category: e.target.value }))}
        />
        </div>
      </div>
      <div className="input_fourth">
      <div className="tt">
        <label htmlFor=""className="lab">Password</label>
        <input
          className="usern"
          aria-label="Артикул производителя  *"
          type="password"
          id="Артикул"
          name="Артикул"
          value={data.cost}
          onChange={(e) => setData((prevData) => ({ ...prevData, cost: e.target.value }))}
        />
        </div>
        <div className="tt">
        <label htmlFor=""className="lab">Work</label>
        <input
          className="usern"
          aria-label="Артикул производителя  *"
          type="checkbox"
          id="Артикул"
          name="Артикул"
          value={data.stock}
          onChange={(e) => setData((prevData) => ({ ...prevData, stock: e.target.value }))}
        />
        </div>
      </div>
      </div>
      <div className="button">
      <NavLink to="/home"><button className="btn btn-outline-success but">
          Сохранить
        </button></NavLink>
      <NavLink to="/home"><button className="btn btn-outline-dark but" >
           Отмена
        </button></NavLink>
      </div>
      </div>
    </div>
  )
}

export default AddTovar