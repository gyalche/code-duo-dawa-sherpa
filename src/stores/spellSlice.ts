import { getListOfFavroite } from './spellSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface spellSlice {
    listOfFavroite: Array<object>,
    search: string | number,
}

// Define the initial state using that type
const initialState: spellSlice = {
    listOfFavroite: [],
    search: '',
}

const spellSlice = createSlice({
    name: 'spell',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addFavroite: (state, action: PayloadAction<any>) => {
            state.listOfFavroite.push(action.payload)
        },
        // removeFavroite: (state, action: PayloadAction<any>) => {
        //     const index = action.payload;
        //     state.listOfFavroite?.splice(index, 1)
        // },
        clearFavroite: (state) => {
            state.listOfFavroite = [];
        },
        addSearch: (state, action: PayloadAction<any>) => {
            state.search = action.payload;
        }

    },
})

export const { addFavroite, addSearch, clearFavroite } = spellSlice.actions;
export const getSearchValue = (state: any) => state?.spell

export default spellSlice.reducer