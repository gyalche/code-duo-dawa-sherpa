// src/app/reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import spellSlice from './spellSlice';

const rootReducer = combineReducers({
    spell: spellSlice,
});

export default rootReducer;