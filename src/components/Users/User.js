import { useContext, useState } from 'react'
import { UserContext } from './userContext'
import { Card, Button, Elevation, Intent, Alert } from '@blueprintjs/core'
import styled from 'styled-components'
import { ConfirmDeleteUser } from './ConfirmDeleteUser'

const StyledCard = styled(Card)``
export const User = ({ user }) => {
  //const [isOpen, setIsOpen] = useState(false)
  /* const userContext = useContext(UserContext)
  const { deleteUser } = userContext */
  /* const handleMoveCancel = () => {
    setIsOpen(false)
  } */
  /* const handleMoveConfirm = (userId) => {
    console.log('here')
    deleteUser(userId)
  } */
  /* const handleMoveOpen = (activeUser) => {
    setIsOpen(true)
    setActiveUserId(activeUser.id)
  } */
  return (
    <div>
      <Card interactive={true} elevation={Elevation.FOUR}>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <h3>{user.phno}</h3>
        <ConfirmDeleteUser userId={user.id} />
      </Card>
    </div>
  )
}
