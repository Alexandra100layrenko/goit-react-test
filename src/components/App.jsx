import { Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import Team from './NestedRoutes/Team'
import Aim from './NestedRoutes/Aim'
import Company from './NestedRoutes/Company'
import Users from './pages/Users/Users'
import UserDetails from './pages/UserDetails/UserDetails'
import Posts from './NestedRoutes/Posts'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route to='/users' element={<Users />}>Users</Route>
        <Route to='/users/:userId' element={<UserDetails />} />
          <Route to='info' element={<h2>info test</h2>}>
          <Route to='posts' element={<Posts />} />
        </Route>
        <Route path='/about' element={<About />}>
          <Route to='team' element={<Team />}>Team</Route>
          <Route to='aim' element={<Aim />}>Aim</Route>
          <Route to='company' element={<Company />}>Job</Route>
        </Route>
        <Route to='/users' element={<Users />}>Users</Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
