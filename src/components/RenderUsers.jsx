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
        <section style={{ display: 'flex', flexWrap: 'wrap' }}>
          {users.map(user => (
            <div key={user.id} style={{ backgroundColor: 'lightblue', padding: '10px', margin: '5px', flex: '0 0 20%', maxWidth: '20%' }}>
              <div>
                {user.name}
              </div>
              
             
            </div>
          ))}
        </section>
      )}
     </div>
  )
}

export default RenderUsers