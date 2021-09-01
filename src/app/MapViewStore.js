import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './ListingsSlice';

export default configureStore({
    reducer: {
        listings: listingsReducer 
    },
});
