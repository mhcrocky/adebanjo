import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//redux stuff
import { Provider } from 'react-redux';
import store from './redux/store';
import { CheckAuthentication } from './utils/CheckAuthentication';

const App: React.FC = () => {
        useEffect(() => {
        CheckAuthentication();
    }, []);

    return (
        <div className='App'>
            <Provider store={store}>
                
            </Provider>
        </div>
    )
}
export default App;
