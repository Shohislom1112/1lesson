// import React from 'react'
// import {  } from "react-loader-spinner"
import { useState } from "react";
import "./AddStudent.scss"
import { NavLink } from "react-router-dom";
function AddTovar({contacts, setContacts}) {


  // const navigate = <Navigate/>
  const [data, setData] = useState({
    firstname: '',
    Lastname: '',
    password: '',
    work:'false'
  });

  const addContact = (contacts) => {
    
    const newContacts = [
      { id: Math.floor(Math.random() * 10000000000), ...contacts },
      ...contacts,
    ];
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addContact(data);
    setData({
      firstname: '',
      lastname: '',
      password: '',
      work: false,
    });
  };

  return (
    <div className="addtovar">
      <form onSubmit={onSubmit}>
      <div className="addinput">
        
      <div className="input">
      <div className="input_second">
        <div className="tt">
          <label htmlFor=""className="lab">FirstName <p className="red">*</p></label>
          <input
          className="usern"
         
          type="text"
          id="Артикул"
          name="Артикул"
          value={data.firstname}
          onChange={(e) => setData({ ...data, firstname: e.target.value })}        />
        </div>
        <div className="tt">
        <label htmlFor=""className="lab">Lastname <p className="red">*</p></label>
        <input
          className="usern"
         
          type="text"
          id="Артикул"
          name="Артикул"
          value={data.lastname}
          onChange={(e) => setData({ ...data, lastname: e.target.value })}        />
        </div>
      </div>
      <div className="input_fourth">
      <div className="tt">
        <label htmlFor=""className="lab">Password</label>
        <input
          className="usern"
          type="password"
          id="Артикул"
          name="Артикул"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}        />
        </div>
        <div className="tt">
        <label htmlFor=""className="lab">Work</label>
        <input
          className="usern"
          type="checkbox"
          id="Артикул"
          name="Артикул"
          value={data.work}
          onChange={(e) => setData({ ...data, work: e.target.checked })}        />
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
          </form>
      </div>
    // </div>
  )
}

export default AddTovar