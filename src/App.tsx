import React from 'react';
import { Provider } from 'react-redux';
import Catalog from './componentes/Catalog';
import Teste from './componentes/Teste';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <h1>hello</h1>
      <Teste />
      <Catalog />
    </Provider>
  );
}

export default App;
