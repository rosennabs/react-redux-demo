import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchUsers from '../redux/users/usersActions'

function RenderUsers() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Users </h1>
      <p>Click the button below to see our dummy users!</p>
      <button onClick={() => dispatch(fetchUsers())}>Click me</button>
     </div>
  )
}

export default RenderUsers