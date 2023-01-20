import React from 'react'
import './navbar.css'
import meta from './metamask.png'
import wallet from './wallet.png'
import coin from './coinbase.png'
import {
  
  Link
} from "react-router-dom";
import { click } from '@testing-library/user-event/dist/click'


export default function Navbar(props) {
   click =  () => {
    if(window.ethereum){
       window.ethereum.request({ method: "eth_requestAccounts" }); 
  }else{
    alert("install metamask extension!!")
  }
  console.log("hello")
}
  const hello1 = () =>{
  console.log("hello")
}
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{background:'dark'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        {/* <button onClick={click} type="button">Click Me!</button> */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Connect
          </Link>
          <ul className="dropdown-menu">
            <p className='navbar'>
            Connect your wallet
            </p>
            <li><button onClick={click} type="button" style={{border:'none',background:'none',marginLeft:'8px'}}><img src={meta}></img>Metamask</button></li>
            <li><Link className="dropdown-item" to="#"><img src={coin} height='31px' width='32px' ></img>Coinbase Wallet</Link></li>
            <li><Link className="dropdown-item" to="#"><img src={wallet} height='30px' width='32px'></img>WalletConnect</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" style={{textAlign:"center"}} to="#">  Another?</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li> */}
         {/* <li className="nav-item">
          <Link disabled='true' className="nav-link" to="/farmerprofile">My Profile</Link>
        </li> */}
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item " to="/coopprofile">Co-operative</Link></li>
            <li><Link class="dropdown-item" to="/farmerprofile">Farmer</Link></li>
            
          </ul>
        </li>
          
      </ul>

      <form className="d-flex" role="search">
      
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
      </>
  )
}
