import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'

// Redutores e mapeamentos.
import { messageReducer } from './messageReducer';
import { mapStateToProps, mapDispatchToProps } from './mapStateDispatchToProps';

// componentes
import DisplayMessages from './DisplayMessages';
import DisplayMessagesFunction from './DisplayMessagesFunction';

// Cria a loja redux. será passa para o Provider
const store = createStore(messageReducer);

// Conectados a loja do redux. Versões componente de class e função.
const ContainerClass = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);
const ContainerFunction = connect(mapStateToProps, mapDispatchToProps)(DisplayMessagesFunction);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* A store do redux armazena os dados globalmente 
        parecido com API Context do React = <React.Provider> */}
    <Provider store={store}>
      <h2>Componente de classe</h2>
      <ContainerClass />
      <hr />
      <h2>Componente de função</h2>
      <ContainerFunction />

      {/* <DisplayMessages /> não esta conectada a loja do redux não posso utiliza a store???*/}
    </Provider>
  </React.StrictMode>
);