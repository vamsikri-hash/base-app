import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavbar = styled.div`
  grid-area: navbar;
  width: 300px;
  ul {
    list-style: none;
    font-size: large;
    li > a {
      &.selected {
        background: greenyellow;
      }
    }
  }
`
export const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
        
          <NavLink exact to='/' activeClassName='selected' >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' activeClassName='selected'>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to='/adduser' activeClassName='selected'>
            Add-Users
          </NavLink>
        </li>
      </ul>
    </StyledNavbar>
  )
}
// diff b/w Link and a tag
