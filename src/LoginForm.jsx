import React, { useState } from 'react';

function LoginForm() {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    alert(email + password)
    console.log('Email:', email);
    console.log('Password:', password);

    // Do something like API call here
  };

  return (
  <>

<form  onSubmit={handleSubmit}>

    <div>
        <p >User Name</p>

        <input 
        type='email'
        value={email}
        placeholder='Enter user Name'
        onChange={(e) => setEmail(e.target.value)}
            required
        />

    </div>

    <div>
        <p >Password</p>

        <input 
        type='password'
        value={password}
        placeholder='Enter the password'
        onChange={(e) => setPassword(e.target.value)}
            required
        />

    </div>
<br/>
        <div>
            <button > Login </button>
        </div>

</form>

  </>
  );
}

export default LoginForm;