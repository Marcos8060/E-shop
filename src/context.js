import React,{useEffect,useReducer, useContext} from 'react'
import reducer from './reducer'


const url = 'http://127.0.0.1:8000/api/items/';

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart:[],
  total:0,
  amount:0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)



  const fetchData = async () =>{
    dispatch({ type: 'LOADING'})
    const response = await fetch(url);
    const cart = await response.json();

    dispatch({ type: 'DISPLAY_ITEMS',payload:cart})
  } 

  
  const toggleAmount = (id,type) =>{
    dispatch({ type: 'TOGGLE_AMOUNT',payload:{id, type}})
  }



  useEffect(() =>{
    fetchData();
  },[])

  useEffect(() =>{
    dispatch({ type: 'GET_TOTALS'})
    console.log(state.amount)
  },[state.cart])


  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleAmount
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