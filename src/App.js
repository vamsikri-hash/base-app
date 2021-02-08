import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'

import { UserState } from './components/Users/userContext'
import { Users } from './components/Users/Users'
import { AddUser } from './components/Forms/AddUser'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <UserState>
          <Route exact path='/users'>
            <Users />
          </Route>
          <Route exact path='/adduser'>
            <AddUser />
          </Route>
        </UserState>
      </Router>
    </div>
  )
}

export default App
