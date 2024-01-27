// import React from 'react'
import { useState } from "react";
import "./Home.scss"
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import Header from "../../components/header/Header";
function Home({contacts}) {
  
  // const [contactsToSend, setContactsToSend] = useState(contacts);
  // const [error, setError] = useState('');
// const [allcard, setAllcard] = useState([])
const [search, setSearch] = useState('');
  

 
    const handleSearchChange = (e) => {
    setSearch(e.target.value);
    // searchContact(e.target.value);
  };
 
 
 
 
 
 
  return (
    <div className="div">
         <div className="div2">
          <h4>All Students ()</h4>
          <input type="search"
            id="search"
            placeholder="Поиск"
            className="search"
            // className="form-control" 
            value={search}
            onChange={handleSearchChange}
          />
         </div>
         <div>
        <div className='tovar_name'>
          <div className="tovarr">
              {/* <Header /> */}
              {/* <p className='home__text p'>Id</p> */}
            <p className='home__category p1'>FirstName</p>
            <p className='home__brend p2'>LastName</p>
            <p className='home__cost p3'>PassWord</p>
            <p className='home__stock p4'>Work</p>
                     

          </div>
<hr />
            {
                contacts.map((contact) => (
                  <div
                  className="card p-2 mb-2 d-flex flex-row align-items-center justify-content-between"
                  key={contact.id}
                >
                   <div>
            <h3>
              {contact.firstname} {contact.lastname}
            </h3>
            <p>{contact.password}</p>
            <p>{contact.work}</p>
          </div>
          </div>
                ))
              }


        </div>
    </div>
    </div>
  )
}

export default Home