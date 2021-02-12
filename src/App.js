import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavbarComponent } from './components/Navbar/Navbar'
import { UserState } from './components/Users/userContext'
import { Users } from './components/Users/Users'
import { AddUser } from './components/Forms/AddUser'
import styled from 'styled-components'

const AppContainer = styled.div`
`
const App = () => {
  return (
    <AppContainer>
      <Router>
        <NavbarComponent />
        <UserState>
          <Route exact path='/users'>
            <Users />
          </Route>
          <Route exact path='/adduser'>
            <AddUser />
          </Route>
        </UserState>
      </Router>
    </AppContainer>
  )
}

export default App
