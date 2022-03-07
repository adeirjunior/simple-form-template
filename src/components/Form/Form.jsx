import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className='formBody'>
        <form>
            <div className='formContainer'>
                <h6 className='formTitle'>Login</h6>
                <div className='divisor'></div>
                <div className='formContainer'>
                    <label className='formLabel'>E-mail</label>
                    <input className='formInput' type="email" placeholder='E-mail'/>
                    <label className='formLabel'>E-mail</label>
                    <input className='formInput' type="password" placeholder='Password'/>
                    <button className='formBtn'>
                        Entrar
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form