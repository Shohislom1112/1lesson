import  { useState, useEffect, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotStudent from "./pages/notstudent/NotStudent";
import NotFound from "./pages/notFound/NotFound";
import AddStudent from "./pages/addstudent/AddStudent";

import Profile from "./pages/profile/Profile";
import Loader from "./components/Loader";

function App() {
  const contactsLocal = JSON.parse(localStorage.getItem('contacts')) || [];
  const [contacts, setContacts] = useState(contactsLocal);


  const storedUserData = localStorage.getItem("user");
  const [user, setUser] = useState(
    storedUserData ? JSON.parse(storedUserData) : <Navigate to="/login" replace/>
  );
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    
    const fetchData = async () => {
 
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []); 

  if (loading) {
    
    return <div>Loading...</div>;
  }



  


  return (
    <div>
      <Router>
        <div className="block_first">
          <Sidebar />
          <div className="block_second">
            <Header user={user} />
            <Routes>
              <Route path="/" element={<Suspense fallback={<Loader/> }><NotStudent/></Suspense>} />
              <Route path="login" element={<Suspense fallback={<Loader/>}><Login setUser={setUser} /></Suspense>} />
              <Route path="addtovar" element={<Suspense fallback={<Loader/>}><AddStudent contacts={contacts}  /></Suspense>} />
              <Route path="profile" element={<Suspense fallback={<Loader/> }><Profile setUser={setUser} user={user} /></Suspense>} />
              <Route path="home" element={<Suspense fallback={<Loader/> }><Home contact={contacts}  setContacts={setContacts}    /></Suspense>} />
              <Route path="*" element={<Suspense fallback={<Loader/>}><NotFound /></Suspense>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
