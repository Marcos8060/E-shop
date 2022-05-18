import React, { useEffect, useState } from 'react'
import './css/special.css'
import axios from 'axios'
import { GlobalContext } from '../context'
import LoadingSpin from "react-loading-spin";


const url = 'http://127.0.0.1:8000/api/special/1/'
function Special() {
    const [item,setItem] = useState([])
    const {state:{cart},dispatch,loading} = GlobalContext();

    useEffect(() =>{
        axios.get(url)
        .then((res) =>{
            setItem(res.data)
        })
    },[])

    if(loading){
      return(
        <div className='loading2'>
          <LoadingSpin
            duration="2s"
            width="15px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="80px"
            primaryColor="yellow"
            secondaryColor="#333"
            numberOfRotationsInAnimation={2}
        />
        </div>
      )
    }
  return (
    <div className='app__special'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid mb-4' src={item.image} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-around align-items-center">
                        <div className='count'>
                         <h4>0</h4>
                         <span>hours</span>
                        </div>
                        <div className='count'>
                         <h4>0</h4>
                         <span>minutes</span>
                        </div>
                        <div className='count'>
                         <h4>0</h4>
                         <span>seconds</span>
                        </div>
                    </div>
                <hr />
                <h4>{item.name}</h4>
                <h4 className='price'>$ {item.price}</h4>
                <hr />
                <p>{item.description}</p>
                <hr />
                {cart.some((p) => p.id === item.id) ? (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE",
                        payload: item,
                      });
                    }}
                    className="removeBtn"
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item,
                      });
                    }}
                    className="addBtn"
                  >
                    Add to cart
                  </button>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Special