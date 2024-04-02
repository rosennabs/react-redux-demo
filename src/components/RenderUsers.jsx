import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchUsers from '../redux/users/usersActions'
import '../styles/RenderUsers.css';
import { MdOutlineEmail, MdPhoneIphone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

function RenderUsers() {
  
  
  const isLoading = useSelector(state => state.loading);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className='homepage'>
      <h1> Users </h1>
      <p>Click the button below to see our dummy users!</p>
      <button onClick={handleFetchUsers} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Click me'}
      </button>

      {users && (
        <section className='user-container'>
          {users.map(user => (
            <div key={user.id} className='user-card'>
              <div>
                {user.name}
                <p><MdOutlineEmail /> {user.email}</p>
                <p><MdPhoneIphone /> {user.phone}</p>
                <p><TbWorldWww /> {user.website}</p>
              </div>
              
             
            </div>
          ))}
        </section>
      )}
     </div>
  )
}

export default RenderUsers