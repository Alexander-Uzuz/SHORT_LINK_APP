import { combineReducers } from "@reduxjs/toolkit";
import userReducer from 'modules/auth/authSlice';
import linksReducer from 'modules/links/linksSlice';


export const rootReducer = combineReducers({
    user:userReducer,
    links:linksReducer
});

export type RootState = ReturnType<typeof rootReducer>;