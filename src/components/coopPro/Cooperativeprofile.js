import React from 'react'
import VerifyDet from '../VerifyDet'
import Navbarcoop from './Navbarcoop'

export default function Cooperativeprofile(props) {
  return (
    <>
    <Navbarcoop/>
    <div className='spaceR'></div>
    <h3 style={{textAlign:'center'}}>Welcome,{props.name}</h3>
    <div className='containerDet'>
      <h3 style={{textAlign:'center',padding:'5px'}}>Your Details</h3>
        <span className='spanDet'>Co-op ID:</span>
        <p className='pDet'>12</p>
        <span className='spanDet'>Payable address:</span>
        <p className='pDet'></p>
        <span className='spanDet'>FT balance:</span>
        <p className='pDet'></p>
        <span className='spanDet'>Eth balance:</span>
        <p className='pDet'></p>
        <span className='spanDet'>No. of farmer:</span>
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
    
      </div>

      <VerifyDet/>
 </>
  )
  
}
