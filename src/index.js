// index
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import  App  from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = document.getElementById('root');
const createRootInstance = createRoot(root);

const render = (Component) => {
  createRootInstance.render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>
  );
};

if (root.hasChildNodes()) {
  createRootInstance.unmount();
}

render(App);
