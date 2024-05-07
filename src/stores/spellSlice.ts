import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface spellSlice {
    listOfFavroite: Array<object>,
    search: string | number,
    view: boolean,
}

// Define the initial state using that type
const initialState: spellSlice = {
    listOfFavroite: [],
    search: '',
    view: true,
}

const spellSlice = createSlice({
    name: 'spell',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addFavroite: (state, action: PayloadAction<any>) => {
            state.listOfFavroite.push(action.payload)
        },
        removeFromFavroite: (state, action: PayloadAction<any>) => {
            const index = state.listOfFavroite.findIndex((idx) => idx.index === action.payload);
            state.listOfFavroite?.splice(index, 1)
        },
        clearFavroite: (state) => {
            state.listOfFavroite = [];
        },
        addSearch: (state, action: PayloadAction<any>) => {
            state.search = action.payload;
        },
        setView: (state, action: PayloadAction<boolean>) => {
            state.view = action.payload
        }
    },
})

export const { addFavroite, addSearch, clearFavroite, removeFromFavroite, setView } = spellSlice.actions;
export const getSearchValue = (state: any) => state?.spell;
export const getView = (state: any) => state?.spell?.view

export default spellSlice.reducer