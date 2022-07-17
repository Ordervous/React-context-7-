import UserContext from './UserContext'
import { useContext } from 'react'

function Welcome() {
  let user = useContext(UserContext)

  return (
    <span>Welcome back, {user.name}!</span>
  )
}
export default Welcome