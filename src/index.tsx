import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import reducer from './reducers/index';
import { StoreState } from './types/index';

import Hello from './containers/Hello';
import Gallery from './containers/Gallery';
import { Provider } from 'react-redux';

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
      <Hello />
      <Gallery/>     
    </Provider>,
    document.getElementById('root') as HTMLElement
);