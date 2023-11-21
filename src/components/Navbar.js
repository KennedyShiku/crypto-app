// export default function Navbar() {
//   return <nav className="nav">
//   <a href="/"className="Site Name">Crypto App</a>
//   <ul>
//     <li> <a href="home">Home</a> </li>
//     <li> <a href="wallet">Wallet</a> </li>
//     <li> <a href="search bar">Search bar</a> </li>
//     <li> <a href="blog">Blog</a> </li>
//   </ul>
//   </nav>
// }









import React from "react";
import { useRef } from "react";
import {FaBars,FaTimes} from "react-icons/fa"
import "../App.css"

function Navbar() {
  const navRef = useRef();

  const  showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#"> Home </a>
        <a href="/#"> Wallet </a> 
        <a href="/#"> Search </a> 
        <a href="/#"> Blog </a>
         <button className="nav-btn nav-close-btn"onClick={showNavbar}>
          <FaTimes/>
        </button>
        
      </nav>
      <button  className="nav-btn"onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
    );
}

export default Navbar;