import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import Logout from './components/pages/Logout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Logout />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={router} />
    </>
  )
}

export default App
