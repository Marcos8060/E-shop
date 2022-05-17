import React, { useEffect, useState } from 'react'
import './css/special.css'
import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/special/1/'
function Special() {
    const [item,setItem] = useState([])

    useEffect(() =>{
        axios.get(url)
        .then((res) =>{
            setItem(res.data)
        })
    },[])
  return (
    <div className='app__special'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src={item.image} alt="" />
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Special