import React,{useEffect,useState,createContext,useContext,useReducer} from 'react'
import axios from 'axios'
import { reducer } from './reducer';

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
        .then((res) => {
            setProducts(res.data)
        })
    },[])


    return (
        <CartContext.Provider value={{
            state,
            dispatch,
            products
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const GlobalContext = () =>{
    return useContext(CartContext)
}

export default Context;