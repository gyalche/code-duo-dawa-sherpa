// src/app/reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import spellSlice from './spellSlice';

const rootReducer = combineReducers({
    location: spellSlice,
});

export default rootReducer;