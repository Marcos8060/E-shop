import React,{useEffect,useState,useReducer, useContext} from 'react'
import axios from 'axios';


const url = `http://127.0.0.1:8000/api/items/`;

const initialState = {
    cart: [],
    loading: false,
    total: 0,
    amount: 0
}
const AppContext = React.createContext();
function AppProvider({ children }) {
    const [state,dispatch] = useReducer(state,initialState)

    const fetchData = async() =>{
        dispatch({ type: 'LOADING'})
        const cart = await axios.get(url)
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart})
    }

    useEffect(() =>{
        fetchData();
    },[])
  return (
    <AppContext.Provider value={{
        ...state,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { useContext, AppProvider }