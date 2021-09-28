import React from 'react'
import { store } from './src/store/store'
import { Provider } from 'react-redux'
import AppRouter from './src/router/AppRouter'

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
