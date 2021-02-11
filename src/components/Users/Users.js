import { useEffect, useContext } from 'react'
import { User } from './User.js'
import { UserContext } from './userContext'
import styled from 'styled-components'

const UsersContainer = styled.div`
  margin-right: 100px;
  display: grid;
  grid-area: users;
  width: calc(100vh-300px);
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`

export const Users = () => {
  //const [Userdata, setUserdata] = useState([])
  const { state, getData } = useContext(UserContext)

  useEffect(() => {
    console.log(1)
    console.log(getData())
    getData()
  }, [])

  return (
    <UsersContainer>
      {state.Userdata.map((user) => {
        return <User key={user.id} user={user} />
      })}
    </UsersContainer>
  )
}

// what is clean up in useEffect hook any example
