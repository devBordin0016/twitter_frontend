import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
