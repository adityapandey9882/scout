// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HomeComponent from "./HomeComponent";
import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import ServicesComponent from "./ServiceComponet";
import LoginComponent from "./LoginComponent";
// import SignupComponent from "./SignupComponent";
import './NavbarComponent.css'
// import SalaryCalculationForm from './HrComponentCalculate';
import { useState } from 'react';

const Header = () =>{
  const [isLogin, setLogin] = useState(false)
  return   (
     <Router>
       <div>
         <header className='header-width'>
          <p className='logo' alt="Scout-image" ></p>
           <nav className='contain-nav'>
             <ul>
               <li>
                 <NavLink to="/" end activeClassName="active-link">Home</NavLink>
               </li>
               <li>
                 <NavLink to="/about" activeClassName="active-link">About</NavLink>
               </li>
               <li>
                 <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
               </li>
               <li>
                 <NavLink to="/services" activeClassName="active-link">Services</NavLink>
               </li>
               <li>
                 <NavLink to="/login" activeClassName="active-link" onClick={()=>setLogin(!isLogin)} >{isLogin ? 'Signup' : 'Login'}</NavLink>
               </li>
               <li>
                 <NavLink to="/hrDepart" activeClassName="active-link">HrDeparment</NavLink>
               </li>
             </ul>
           </nav>
         </header>
         <div className="body-content">
           <Routes>
             <Route path="/" element={<HomeComponent />} />
             <Route path="/about" element={<AboutComponent />} />
             <Route path="/contact" element={<ContactComponent />} />
             <Route path="/services" element={<ServicesComponent />} />
             <Route path="/login" element={<LoginComponent />} />
             <Route path="/signup" element={<LoginComponent />} />
             {/* <Route path="/hrDepart" element={<SalaryCalculationForm/>} /> */}
           </Routes>
         </div>
       </div>
     </Router>
   );
  }
   export default Header;