import { Link } from 'react-router-dom'
import styled from 'styled-components'
const StyledNavbar = styled.div`
  grid-area: navbar;
  width: 300px;
  ul {
    list-style: none;
    font-size: large;
  }
`
export const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/adduser'>Add-Users</Link>
        </li>
      </ul>
    </StyledNavbar>
  )
}
// diff b/w Link and a tag
