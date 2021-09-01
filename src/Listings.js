import { useSelector, useDispatch } from 'react-redux';
import { maxBedroomsUpdated } from './app/ListingsSlice';

const Listings = (props) => {
    const listingsFilters = useSelector((state) => state.listings.filters);
    const dispatch = useDispatch();

    return (
        <div>
            minBedrooms: <span>{listingsFilters.minBedrooms}</span><br />
            maxBedrooms: <span>{listingsFilters.maxBedrooms}</span><br />
            minBathrooms: <span>{listingsFilters.minBathrooms}</span><br />
            maxBathrooms: <span>{listingsFilters.maxBathrooms}</span><br />
            <header className="App-header">
                <button onClick={() => dispatch(maxBedroomsUpdated(3))}>Set Max Bedrooms to 3</button>
            </header>
        </div>
    );
}

export default Listings;
