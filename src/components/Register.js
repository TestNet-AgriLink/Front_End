import React, { Component } from 'react'
import './register.css'


export default class Register extends Component {
  printf = () => {
    console.log('hello')
  }
  render() {
    return (
      
      <div className='all'>
        <div className='spaceR'></div>
      <div className='container' >
   <div className='box' style={{width:'400px'}}>
   <div class="">
  <label for="exampleFormControlInput1" class="form-label"><span>
    <b style={{color:'grey',fontSize:'20px'}}>Enter your full name:</b></span></label>
  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><span>
    <b style={{color:'grey',fontSize:'20px'}}>Enter your email address:</b></span></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><span>
    <b style={{color:'grey',fontSize:'20px'}}>Enter your phone number:</b></span></label>
  <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><span>
    <b style={{color:'grey',fontSize:'20px'}}>Enter your address:</b></span></label>
  <input type="address" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><span>
    <b style={{color:'grey',fontSize:'20px'}}>Enter your password:</b></span></label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"/>
</div>
    </div> 
    <a href="/register">
<button type="submit" onClick={this.printf} class="btn btn-outline-primary">Submit</button>
</a>
      </div>
      </div>
    )
  }
}
