// import Container from 'react-bootstrap/Container';
// import  { user } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Chiqish from "../../assets/images/chiqish.svg"
import "./Header.scss"
import { useState } from 'react';
function Header({user}) {
  const [query, setQuery] = useState("")

  function search(e){
      e.preventDefault()
      setQuery(e.target.value)

      
  }

  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary  navbar">
      <div className="w-100 mx-auto px-5">
        <Navbar.Brand>
          <Link to="/home" className='link'><div className="nav_text">
          <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
            <input
                type="text"
                className="w-full h-25 placeholder-gray-400 text-gray-900 p-4"
                placeholder="Search"
                onChange={search}
                value={query}
            />
            <button className="bg-white p-4">🔍</button>
        </div>
            </div>
            {user ? (
              <Nav.Link>
                <NavLink to="/profile"><div className="loginn">
                {user.name}
                </div></NavLink>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <NavLink  to="/login"><div className='loginn'>
                <img src={Chiqish} alt="" />
                  <p className="p1">Выйти</p>
                </div></NavLink>
              </Nav.Link>
            )}
              {/* <Nav.Link>
                <NavLink  to="/login"><div className='loginn'>
                <img src={Chiqish} alt="" />
                  <p className="p1">Выйти</p>
                </div></NavLink>
              </Nav.Link> */}

                
             
              </Link>
            
            
        </Navbar.Brand>
        
      </div>
    </Navbar>
  );
}

export default Header;
