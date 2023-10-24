// index
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'; // Додано імпорт з redux-persist

const root = document.getElementById('root');
const createRootInstance = createRoot(root);

const render = (Component) => {
  createRootInstance.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Component />
        </Router>
      </PersistGate>
    </Provider>
  );
};

if (root.hasChildNodes()) {
  createRootInstance.unmount();
}

render(App);
