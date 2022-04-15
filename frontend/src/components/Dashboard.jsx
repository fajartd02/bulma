import React, { useEffect, useState } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);

      setName(decoded.name);
      setExpire(decoded.exp);

    } catch(err) {
      if(err.response) {
          navigate('/');
      }
    }
  }

  const getUsers = async() => {
    const response = await axios.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
  }

  return (
    <div className='container mt-5'>
        <h1>Welcome Back: {name}</h1>
        <button onClick={getUsers} className='button is-info'>Get Users</button>
    </div>
  )
}

export default Dashboard;