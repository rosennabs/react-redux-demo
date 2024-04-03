import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, handleCloseRequest } from '../redux/users/usersActions'
import fetchQuote from '../redux/quotes/quoteActions';
import '../styles/RenderUsers.css';
import { MdOutlineEmail, MdPhoneIphone } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

function RenderUsers() {
  
  
  const isLoading = useSelector(state => state.user.loading);
  const users = useSelector(state => state.user.users);
  const quote = useSelector (state => state.quote.quote)
  const dispatch = useDispatch();

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  const handleCloseButton = () => {
    dispatch(handleCloseRequest());

  };

  const handleFetchQuote = () => {
    dispatch(fetchQuote());
  };


  return (
    <div className='homepage'>
      <h1> Users </h1>
      <p>Click the button below to see our dummy users!</p>

      {(users.length === 0 ? (
        <button onClick={()=>handleFetchUsers()} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Click me'}
      </button>) : null
      )}
      

      {quote && (
      <div>
          {quote.map(quote => (
          <div key={quote.id} className='quote-container'>
          <p>{quote.content}</p>
          <span className='author'>{quote.author}</span>
            </div>
        ))}
        </div>
      )}

      {users && (
        <div className='main-container'>
        <section className='user-container'>
          {users.map(user => (
            <div key={user.id} className='user-card' onClick={()=>handleFetchQuote()}>
              <div>
                {user.name}
                <p><MdOutlineEmail /> {user.email}</p>
                <p><MdPhoneIphone /> {user.phone}</p>
                <p><TbWorldWww /> {user.website}</p>
              </div>
              
             
            </div>
          ))}
          
          </section>
          {(users.length > 0 ? (
            <button className='close-button' onClick={() => handleCloseButton()} >Close</button>) : null
            )}
         

          </div>
      )}

      
      
     </div>
  )
}

export default RenderUsers