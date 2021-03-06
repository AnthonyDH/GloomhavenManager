import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import dbApp from "./State/Reducer";
import MainView from './components/Tabs/MainView/MainView';

const store = createStore(dbApp,  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe (() => {
    localStorage.setItem('ItemView:spoilerFilter', JSON.stringify(store.getState().spoilerFilter));
});

class App extends Component {

    render() {

        return (
            <Container>
                <Provider store={store}>
                    <MainView/>
                </Provider>
            </Container>
        );

    }
}

export default App;
