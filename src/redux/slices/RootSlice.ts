import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        model: "Model",
        type: "Type",
        license_plate: "License Plate"
        // first: "First Name",
        // last: "Last Name",
        // email: "Email",
        // phone_number: "Phone Number",
        // address: "Address",
    },
    reducers: {
        chooseModel: (state, action) => { state.model = action.payload},
        chooseType: (state, action) => { state.type = action.payload},
        chooseLicense_plate: (state, action) => { state.license_plate = action.payload}
        // chooseFirst: (state, action) => { state.first = action.payload},
        // chooseLast: (state, action) => { state.last = action.payload},
        // chooseEmail: (state, action) => { state.email = action.payload},
        // choosePhone: (state, action) => { state.phone_number = action.payload},
        // chooseAddress: (state, action) => { state.address = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseModel, chooseType, chooseLicense_plate} = rootSlice.actions