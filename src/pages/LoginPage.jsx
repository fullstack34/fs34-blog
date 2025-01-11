import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/users/token', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(body => {
      localStorage.setItem('user_token', body.token)
      navigate('/newpost');
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <label data-cy="email">Email</label>
      <input 
        onChange={event => setEmail(event.target.value)}
        type="text" 
        className="border block" />
      <label data-cy="password">Password</label>
      <input
        onChange={event => setPassword(event.target.value)} 
        type="password" 
        className="border block" />
      <button data-cy="submit" className="bg-black text-white px-2">Login</button>
    </form>
  )
}
 