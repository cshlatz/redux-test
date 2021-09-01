import { Provider } from 'react-redux';
import store from './app/MapViewStore';

import logo from './logo.svg';
import './App.css';

import Listings from './Listings';

const App = (props) => {
    return (
        <Provider store={store}>
            <div className="App">
                <Listings />
            </div>
        </Provider>
    );
}

export default App;
