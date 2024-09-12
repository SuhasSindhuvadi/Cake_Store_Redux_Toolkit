// reducers/cakeSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialCakeState = {
    numberOfCakes: 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState: initialCakeState,
    reducers: {
        buyCake: (state) => {
            state.numberOfCakes = state.numberOfCakes > 0 ? state.numberOfCakes - 1 : 0
        }
    }
});

export const { buyCake } = cakeSlice.actions;
export default cakeSlice.reducer;
