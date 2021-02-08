import { useEffect, useContext } from 'react'
import { User } from './User.js'
import './User.css'

import { UserContext } from './userContext'

export const Users = () => {
  //const [Userdata, setUserdata] = useState([])
  const { state, getData } = useContext(UserContext)

  useEffect(() => {
    console.log(1)
    console.log(getData())
    getData()
  }, [])

  return (
    <div className='users'>
      {state.Userdata.map((user) => {
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}

// what is clean up in useEffect hook any example
