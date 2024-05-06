import { getListOfFavroite } from './spellSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface spellSlice {
    listOfFavroite: Array<object>
}

// Define the initial state using that type
const initialState: spellSlice = {
    listOfFavroite: [],
}

const spellSlice = createSlice({
    name: 'spell',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addFavroite: (state, action: PayloadAction<any>) => {
            state.listOfFavroite.push(action.payload)
        },

    },
})

export const { addFavroite } = spellSlice.actions

export default spellSlice.reducer