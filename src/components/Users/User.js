import { useContext } from 'react'
import { UserContext } from './userContext'

export const User = ({ user }) => {
  const userContext = useContext(UserContext)
  const { deleteUser } = userContext
  return (
    <div className='user'>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      <h3>{user.phno}</h3>
      <button
        onClick={() => {
          deleteUser(user.id)
        }}
      >
        Delete
      </button>
    </div>
  )
}
