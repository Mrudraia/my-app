import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const logo = require('../images/logo3.png');
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Cluster",
            icon:<FaTh/>
        },
        {
            path:"/projects",
            name:"Projects",
            icon:<FaUserAlt/>
        },
        {
            path:"/customizations",
            name:"Customizations",
            icon:<FaRegChartBar/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaCommentAlt/>
        },
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "400px" : "60px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={logo} /></h1>
                   <div style={{marginLeft: isOpen ? "100px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main style={{ backgroundColor: ''}}>{children}</main>
        </div>
    );
};

export default Sidebar;