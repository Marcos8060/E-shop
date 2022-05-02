import React from 'react'
import denim from '../images/denim.png'
import shirt from '../images/shirt.png'
import shoe from '../images/shoe.png'
import watch from '../images/watch.png'
import './css/cartcontainer.css'


function CartContainer() {
  return (
    <>
      <div className="app__cartContainer">
        <div class="container-fluid">
           <div className="row">
             <div className="col-md-3">
               <div className="card">
                 <img className='img-fluid item_img' src={denim} alt="" />
                 <div className='d-flex justify-content-around'>
                    <span>Denim Jacket</span>
                    <span>$30</span>
                 </div>
                 <button className='btn2'>Add to cart</button>
               </div>
             </div>
             <div className="col-md-3">
               <div className="card">
                 <img className='img-fluid item_img' src={shirt} alt="" />
                 <div className='d-flex justify-content-around'>
                    <span>Denim Jacket</span>
                    <span>$30</span>
                 </div>
                 <button className='btn2'>Add to cart</button>
               </div>
             </div>
             <div className="col-md-3">
               <div className="card">
                 <img className='img-fluid item_img' src={shoe} alt="" />
                 <div className='d-flex justify-content-around'>
                    <span>Denim Jacket</span>
                    <span>$30</span>
                 </div>
                 <button className='btn2'>Add to cart</button>
               </div>
             </div>
             <div className="col-md-3">
               <div className="card">
                 <img className='img-fluid item_img' src={watch} alt="" />
                 <div className='d-flex justify-content-around'>
                    <span>Denim Jacket</span>
                    <span>$30</span>
                 </div>
                 <button className='btn2'>Add to cart</button>
               </div>
             </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default CartContainer