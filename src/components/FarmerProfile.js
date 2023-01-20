import React from 'react'
import './fp.css'
import 'charts.css';
import  './crops.jpg'
import Navbarfarmer from './Navbarfarmer';



export default function FarmerProfile(props) {
  return (
    <>
    <div style={{backgroundColor:'rgb(188, 170, 170)',height:'712px'}}>
    {/* <Navbarfarmer/> */}
    
    <div style={{paddingTop:'67px'}}></div>
    
        {/* <img className='imgC'src = 'crops.jpg'></img> vuyhv */}
       <div style={{marginLeft:'10px'}}> <div id="avatar"></div>
        <h5>My Profile</h5> </div>
        <div className='containerfp'  >
        
        <div className='boxfp box-1'>
            <h3 style={{textAlign:'center'}}>
              Transfertoken
            </h3>
            <span className='item'>
              <ul>
                
                <li>Potato: Token ID : 3, Amount:50 kg </li>
                <li>Rice  : Token ID : 4, Amount:25kg </li>
              </ul>
              </span>
        </div>
        <div className='boxfp box-2'>
        <h3 style={{textAlign:'center'}}>
                Fertilizer
            </h3>
            <span className='item'>
              <ul>
                <li>Urea: Token ID : 5, Amount:700 kg </li>
                <li>DAP: Token ID : 9, Amount:500 kg </li>
                
              </ul>
             </span>
        </div>

    {/* <div className='spaceR'></div>
    <h3 style={{textAlign:'center'}}>Welcome,{props.name}</h3>
    <div className='containerDet'>
      <h3 style={{textAlign:'center',padding:'5px'}}>Your Details</h3>
        <span className='spanDet'>Name:</span>
        <p className='pDet'>12</p>
        <span className='spanDet'>Address:</span>
        <p className='pDet'></p>
        <span className='spanDet'>FT balance:</span>
        <p className='pDet'></p>
        <span className='spanDet'>Eth balance:</span>
        <p className='pDet'></p>
        <span className='spanDet'>Land:</span>
      </div>


    
    <div className='allfp'>
    
    <div className='containerfp'  >
        
        <div className='boxfp box-1'>
            <h3 style={{textAlign:'center'}}>
              Transfertoken
            </h3>
        </div>
        <div className='boxfp box-2'>
        <h3 style={{textAlign:'center'}}>
                Fertilizer
            </h3>
        </div>
        
      </div>

      </div> */}
      </div>
      </div>
 </>
  )
}
