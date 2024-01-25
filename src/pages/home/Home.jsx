// import React from 'react'
import { useEffect, useState } from "react";
import "./Home.scss"
import axios from "axios";
// import { NavLink } from "react-router-dom";
// import Header from "../../components/header/Header";
function Home() {
  // const [error, setError] = useState('');
const [allcard, setAllcard] = useState([])
const [search, setSearch] = useState('');
  


  const FetchCard = async () => {
      const res = await axios.get('http://localhost:3000/Students');
      const data = await res.data;
      console.log(data);
      setAllcard(data)
    
  };
  useEffect(()=> {
    FetchCard()
  }, [])
 
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
              <p className='home__text p'>Id</p>
            <p className='home__category p1'>FirstName</p>
            <p className='home__brend p2'>LastName</p>
            <p className='home__cost p3'>PassWord</p>
            <p className='home__stock p4'>Work</p>
                     

          </div>
<hr />
            {
                allcard.map((allcard) => (
                  <ul key={allcard.id} className='tovarr'>
                  <li className='home__text p'> 
                  
                  Students{allcard.userId}
                  </li>
              <li className='home__category p1'>
                  {allcard.FirstName}
              </li>
              <li className='home__brend p2'>
                  {allcard.LastName}
              </li>
              <li className='home__cost p3'>
                  {allcard.Password} 
              </li>
              <li className='home__stock p4'>
                  {allcard.Work}
                  <hr />
              </li>
              
              </ul>
                ))
              }
              <hr />


        </div>
    </div>
    </div>
  )
}

export default Home