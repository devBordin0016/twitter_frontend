import { Navigate, Route, Routes } from 'react-router-dom'
import Entry from './pages/Entry'
import Feed from './pages/Feed'
import Post from './pages/PostPage'

interface Props {
  children: JSX.Element
}

const PrivateRoute = ({ children }: Props) => {
  const token = localStorage.getItem('access_token')
  return token ? children : <Navigate to="/entry" replace />
}

const InitialRoute = () => {
  const token = localStorage.getItem('access_token')
  return <Navigate to={token ? '/feed' : '/entry'} replace />
}

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialRoute />} />
      <Route path="/entry" element={<Entry />} />
      <Route
        path="/feed"
        element={
          <PrivateRoute>
            <Feed />
          </PrivateRoute>
        }
      />
      <Route
        path="/tweet/:id"
        element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default RoutesPages
