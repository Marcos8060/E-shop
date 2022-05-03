import React,{useEffect,useReducer, useContext} from 'react'
import axios from 'axios';
import reducer from './reducer'


const url = 'http://127.0.0.1:8000/api/items/';

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart:[],
  total:0,
  amount:0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)



  const fetchData = async () =>{
    dispatch({ type: 'LOADING'})
    const response = await fetch(url);
    const cart = await response.json();

    dispatch({ type: 'DISPLAY_ITEMS',payload:cart})
  } 

  useEffect(() =>{
    fetchData();
  },[])

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }