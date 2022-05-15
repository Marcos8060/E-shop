import React,{useEffect,useState,createContext,useContext,useReducer} from 'react'
import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/items/'

const CartContext = createContext();

const Context = ({ children }) =>{
    const [products,setProducts] = useState([])
    const [state,dispatch] = useReducer(reducer,{
        products: products,
        cart: []
    })

    useEffect(() =>{
        axios.get(url)
        .then((res) => console.log(res.data))
    },[])


    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )


}

export default Context;