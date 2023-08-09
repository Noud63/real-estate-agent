import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
               <App />
      </PersistGate>
    </Provider>
);

