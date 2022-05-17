import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './css/random.css'

const url = 'http://127.0.0.1:8000/api/random/'
function Random() {
    const [item,setItem] = useState([])

    useEffect(() =>{
        axios.get(url)
        .then((res) =>{
            setItem(res.data)
        })
    },[])
  return (
    <div className='app__random'>
        
    </div>
  )
}

export default Random