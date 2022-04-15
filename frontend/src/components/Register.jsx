import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault(); // agar page tidak reload
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      });

      navigate("/");
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.message);
      }
    }
  }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="columns is-4-desktop">
              <form className="box" onSubmit={Register}>
                <p className='has-text-centered has-text-danger'>{msg}</p>
                <div className="field mt-2">
                  <label className='label'>Name</label>
                  <div className="controls">
                    <input
                      type="text"
                      className='input'
                      placeholder='Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field mt-5">
                  <label className='label'>Email</label>
                  <div className="controls">
                    <input type="text"
                      className='input'
                      placeholder='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field mt-5">
                  <label className='label'>Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className='input'
                      placeholder='******'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field mt-5">
                  <label className='label'>Confirm Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className='input'
                      placeholder='******'
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className='button is-success is-fullwidth'>Register</button>
                </div>
                <Link to="/">Have an account? <u>Login here</u></Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;