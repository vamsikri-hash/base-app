import { createContext, useReducer } from 'react'
import { reducer } from './userReducer.js'
export const UserContext = createContext()

// User-Level state management
export const UserState = (props) => {
  const initialState = {
    Userdata: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const getData = () => {
    console.log(1)
    fetch('http://localhost:3001/Userdata')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'GSET_USERS', payload: data })
      })
  }
  const AddData = (user) => {
    fetch('http://localhost:3001/Userdata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    //setUser({ name: '', email: '', phno: '' })
  }

  const deleteUser = (userId) => {
    fetch(`http://localhost:3001/Userdata/${userId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    dispatch({ type: 'DELETE_USER', payload: userId })
  }
  return (
    <UserContext.Provider value={{ state, getData, AddData, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
