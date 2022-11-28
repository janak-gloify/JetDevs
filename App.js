import React from 'react';
import Navigation from './src/router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';


const App = () => {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={null} >
        <Navigation />
      </PersistGate>
    </Provider>
  );
};


export default App;
