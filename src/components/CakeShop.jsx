// components/CakeShop.js
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../reducers/cakeSlice'
import { buyIceCream } from '../reducers/iceCreamSlice'

const CakeShop = () => {
    const dispatch = useDispatch();

    // Corrected selectors
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams);

    const handleBuyCake = () => {
        dispatch(buyCake());
    }

    const handleBuyIceCream = () => {
        dispatch(buyIceCream());
    }

    return (
        <div>
            <p>Number of Cakes: {numberOfCakes}</p>
            <p>Number of Ice Creams: {numberOfIceCreams}</p>
            <button onClick={handleBuyCake}>Buy Cake</button>
            <button onClick={handleBuyIceCream}>Buy Ice Cream</button>
        </div>
    );
}

export default CakeShop;
