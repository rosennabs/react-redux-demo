import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchUsers from '../redux/users/usersActions'

function RenderUsers() {
  
  
  const isLoading = useSelector(state => state.loading);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <h1> Users </h1>
      <p>Click the button below to see our dummy users!</p>
      <button onClick={handleFetchUsers} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Click me'}
      </button>

      {users && (
        <section>
          {users.map(user => (
            <div key={user.id}>
              <li>{user.name}</li>
            </div>
          ))}
        </section>
      )}
     </div>
  )
}

export default RenderUsers