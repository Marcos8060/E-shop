import React,{useState,useEffect} from 'react'
import denim from '../images/denim.png'
import shirt from '../images/shirt.png'
import shoe from '../images/shoe.png'
import watch from '../images/watch.png'
import './css/cartcontainer.css'
import axios from 'axios'
import Loading from './Loading'

const url = `http://127.0.0.1:8000/api/items/`
function CartContainer() {
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() =>{
    const getItems = async() =>{
      const result = await axios.get(url)
      setItems(result.data)
      console.log(result.data);
    }
    getItems();
  },[])
  return (
    <>
      <div className="app__cartContainer">
        <div className="container-fluid">
           <div className="row">
             <div className="col-md-3">
               <div className="card">
                 <img className='img-fluid item_img' src={denim} alt="" />
                 <div className='d-flex justify-content-around'>
                    <span>Denim Jacket</span>
                    <span>$30</span>
                 </div>
                 <button className='btn2'>View Item</button>
               </div>
             </div>
             <div className="col-md-3">
               <div className="card">
                 <img className='img-fluid item_img' src={shirt} alt="" />
                 <div className='d-flex justify-content-around'>
                    <span>Denim Jacket</span>
                    <span>$30</span>
                 </div>
                 <button className='btn2'>View Item</button>
               </div>
             </div>
             <div className="col-md-3">
               <div className="card">
                 <img className='img-fluid item_img' src={shoe} alt="" />
                 <div className='d-flex justify-content-around'>
                    <span>Denim Jacket</span>
                    <span>$30</span>
                 </div>
                 <button className='btn2'>View Item</button>
               </div>
             </div>
             <div className="col-md-3">
               <div className="card">
                 <img className='img-fluid item_img' src={watch} alt="" />
                 <div className='d-flex justify-content-around'>
                    <span>Denim Jacket</span>
                    <span>$30</span>
                 </div>
                 <button className='btn2'>View Item</button>
               </div>
             </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default CartContainer