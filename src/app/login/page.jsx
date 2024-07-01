"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import '../login/login.css'
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log(response.data);
      setSuccess('Login successful');
      localStorage.setItem("id", response.data.user.id);
      // Redirect to the dashboard or another protected page
      router.push('/main'); // Adjust this to your desired route
    } catch (error) {
      console.error(error);
      setError('Login failed');
    }
  };

  

  return (

    
    <div className='w-75 m-auto p-5'>
      <h1 className='fw-medium m-2'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className='mb-2'>Email:</label>
          <input
            type="email"
            id="email"
            className='form-control mb-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className='mb-2'>Password:</label>
          <input
            type="password"
            id="password"
             className='form-control mb-3'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='p-2 btn  rounded-2 text-white   bg-black p-2'>Login</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
