import React from 'react';
import { useRouter } from 'next/router';
const SignUpPage = () => {
  const router = useRouter();

  const handleSignUp = (event) => {
    event.preventDefault();

    router.push('/second-post');
  };

  return (
      <div className="container">
          <img src="/image/bird.jpg" alt="bird" />


      <form onSubmit={handleSignUp}>
            

        <h1>Sign Up</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="loginID">Login ID:</label>
        <input type="text" id="loginID" name="loginID" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="password-confirm">Confirm Password:</label>
        <input type="password" id="password-confirm" name="password-confirm" required />
        <button type="submit">Sign Up</button>
      </form>

          <style jsx>{`
      .container img{
        height: 1300px;
    
        }
        .container {
          text-align: center;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          padding: 10px;
          margin: 3px;
          border: none;
          border-bottom: 1px groove #aaa;
          width: 100%;
        }
        button {
          background-color: #aaaa00;
          color: black;
          padding: 10px;
          border: 1px solid #000;
          cursor: pointer;
          width: 100%;
        }
        button:hover {
          background-color: #aaaa00;
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;
