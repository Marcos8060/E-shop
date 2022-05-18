import React,{useEffect,useState,createContext,useContext,useReducer} from 'react'
import axios from 'axios'
import { reducer } from './reducer';
import { productReducer } from './reducer';

const url = 'http://127.0.0.1:8000/api/items/'

const CartContext = createContext();

const Context = ({ children }) =>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [state,dispatch] = useReducer(reducer,{
        products: products,
        cart: []
    })

    const [productState,productDispatch] = useReducer(productReducer,{
        searchQuery: ''
    })


    useEffect(() =>{
        setLoading(true)
        axios.get(url)
        .then((res) => {
            setProducts(res.data)
            setLoading(false)
        })
    },[])



    return (
        <CartContext.Provider value={{
            state,
            dispatch,
            products,
            productState,
            productDispatch,
            loading
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const GlobalContext = () =>{
    return useContext(CartContext)
}

export default Context;