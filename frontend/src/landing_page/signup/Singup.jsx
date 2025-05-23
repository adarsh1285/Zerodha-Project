import React from 'react'
import { useState } from 'react';

function Singup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // API call ke liye yeh part modify karenge
  };
  return (
    <div>
      <div className="container d-flex justify-content-center m-3">
      <form onSubmit={handleSubmit} className='m-4'>
      <label className='p-3'>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </label>
      <br />
      <label className='p-3'>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label className='p-3'>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
      </div>
    </div>
  )
}

export default Singup
