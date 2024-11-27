import { Routes, Route } from 'react-router-dom'
import { Home, Pokedex, Details } from '../app/index.js'
import ProtectedRoute from './ProtectedRoute.jsx'


function AppRouter() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/pokedex' element={<ProtectedRoute />}>
        <Route index element={<Pokedex />} />
        <Route path=':name' element={<Details />} />
      </Route>

    </Routes>
  )
}

export default AppRouter