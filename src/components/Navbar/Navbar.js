import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='nav' style={{ display: 'flex' }}>
      <h2> Navbar </h2>
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
    </div>
  )
}
// diff b/w Link and a tag
