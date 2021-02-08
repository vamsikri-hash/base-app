import { useState, useContext } from 'react'
import './AddUser.css'
import { UserContext } from '../Users/userContext'

export const AddUser = () => {
  const userContext = useContext(UserContext)

  const { AddData } = userContext
  const [user, setUser] = useState({ name: '', email: '', phno: '' })

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    // can use useRef here to get current values
  }
  const addUser = () => {
    AddData(user)
  }
  return (
    <div className='form'>
      <input type='text' name='name' onChange={onChange} autoFocus />
      <input type='email' name='email' onChange={onChange} />
      <input type='text' name='phno' onChange={onChange} />
      <button type='submit' onClick={addUser}>
        Add User
      </button>
    </div>
  )
}
