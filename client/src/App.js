import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import DevTools from 'mobx-react-devtools'
import {BrowserRouter} from 'react-router-dom'

import MainScreen from './components/MainTable/MainTable'
import ModalWindow from './components/ModalWindow/ModalWindow'

import './App.scss'


const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`
})


function App() {


  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <MainScreen/>
        <ModalWindow />
        {/*<DevTools />*/}
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
