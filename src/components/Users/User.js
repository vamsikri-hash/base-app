import { useContext, useState } from 'react'
import { UserContext } from './userContext'
import { Card, Button, Elevation, Intent, Alert } from '@blueprintjs/core'
import styled from 'styled-components'

const StyledCard = styled(Card)``
export const User = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const userContext = useContext(UserContext)
  const { deleteUser } = userContext
  const handleMoveCancel = () => {
    setIsOpen(false)
  }
  const handleMoveConfirm = (userId) => {
    console.log('here')
    //deleteUser(userId)
  }
  const handleMoveOpen = () => {
    setIsOpen(true)
  }
  return (
    <div>
      <Card interactive={true} elevation={Elevation.FOUR}>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <h3>{user.phno}</h3>
        <Button intent={Intent.DANGER} icon='trash' onClick={handleMoveOpen} />
        <Alert
          canEscapeKeyCancel='false'
          canOutsideClickCancel='false'
          cancelButtonText='Cancel'
          confirmButtonText='Move to Trash'
          icon='trash'
          isOpen={isOpen}
          intent={Intent.DANGER}
          onCancel={handleMoveCancel}
          onConfirm={handleMoveConfirm(user.id)}
        />
      </Card>
    </div>
  )
}
