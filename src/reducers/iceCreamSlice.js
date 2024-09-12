// reducers/iceCreamSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialIceCreamState = {
    numberOfIceCreams: 10
}

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState: initialIceCreamState,
    reducers: {
        buyIceCream: (state) => {
            state.numberOfIceCreams = state.numberOfIceCreams > 0 ? state.numberOfIceCreams - 1 : 0
        }
    }
});

export const { buyIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
