const reducer = (state,action) =>{

    // load state
    if(action.type === 'LOADING'){
        return {
            ...state,
            loading: true
        }
    }

    // fetch items
    if(action.type === 'DISPLAY_ITEMS'){
        return {
            ...state,
            cart: action.payload,
            loading: false
        }
    }

    // toggle amount
    if(action.type === 'TOGGLE_AMOUNT'){
        let tempCart = state.cart.map((cartItem) =>{
            if(cartItem.id === action.payload.id){
                if(action.payload.type === 'inc'){
                    return {
                        ...cartItem,
                        amount: cartItem.amount + 1
                    }
                }
                if(action.payload.type === 'dec'){
                    return {
                        ...cartItem,
                        amount: cartItem.amount - 1
                    }
                }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)
        return {
            ...state,
            cart: tempCart
        }
    }

    if(action.type === 'GET_TOTALS'){

        let { total, amount } = state.cart.reduce((cartTotal,cartItem) =>{
            const { price,amount} = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        },{
            total:0, 
            amount:0
        })
        // restrict to two decimal places
        total = parseFloat(total.toFixed(2))

        return {...state,total,amount}
    }


    return state
}

export default reducer
