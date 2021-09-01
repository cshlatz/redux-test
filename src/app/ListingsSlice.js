import { createSlice } from '@reduxjs/toolkit';

export const listingsSlice = createSlice({
    name: 'listings',
    initialState: {
        filters: {
            minBedrooms: '',
            maxBedrooms: '',
            minBathrooms: '',
            maxBathrooms: '',
        }
    },
    reducers: {
        minBedroomsUpdated: (state, action) => {
            state.filters.minBedrooms = action.payload
        },
        maxBedroomsUpdated: (state, action) => {
            state.filters.maxBedrooms = action.payload
        },
        minBathroomsUpdated: (state, action) => {
            state.filters.minBathrooms = action.payload
        },
        maxBathroomsUpdated: (state, action) => {
            state.filters.maxBathrooms = action.payload
        },
    }
});

export const { minBedroomsUpdated, maxBedroomsUpdated, minBathroomsUpdated, maxBathroomsUpdated} = listingsSlice.actions;

export default listingsSlice.reducer;
