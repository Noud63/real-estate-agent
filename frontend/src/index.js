import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { getRealEstates } from './features/estateSlice';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store';
import { GiGameConsole } from 'react-icons/gi';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(getRealEstates())

root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
               <App />
      </PersistGate>
    </Provider>
);

