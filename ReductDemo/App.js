import React, { Component} from 'react';
import { Provider } from 'react-redux';


import reduxStore from './src/component/store'
import Form from './src/component/Form'


class App extends Component {

    render() {
        return (
            <Provider store = {reduxStore()}> 
                <Form />
            </Provider>
        );
    }
}

export default App;
