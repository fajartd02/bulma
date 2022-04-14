import React from 'react'

function Register() {
  return (
    <section class="hero has-background-grey-light is-fullheight is-fullwidth">
      <div class="hero-body">
        <div class="container">
            <div className="columns is-centered">
                <div className="columns is-4-desktop">
                    <form className="box">
                      <div className="field mt-2">
                        <label className='label'>Name</label>
                        <div className="controls">
                          <input type="text" className='input' placeholder='Name' />
                        </div>
                      </div>

                      <div className="field mt-5">
                        <label className='label'>Email</label>
                        <div className="controls">
                          <input type="text" className='input' placeholder='email' />
                        </div>
                      </div>

                      <div className="field mt-5">
                        <label className='label'>Password</label>
                        <div className="controls">
                          <input type="password" className='input' placeholder='******' />
                        </div>
                      </div>

                      <div className="field mt-5">
                        <label className='label'>Confirm Password</label>
                        <div className="controls">
                          <input type="password" className='input' placeholder='******' />
                        </div>
                      </div>
                      <div className="field mt-5">
                        <button className='button is-success is-fullwidth'>Register</button>
                      </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Register;