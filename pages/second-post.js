import React from 'react';

const SecondPost = () => (
  <html>
    <head>
      <title>Login Page</title>
    </head>
    <body>
      <h1>Login Page</h1>
      <form action="/login" method="post">
        <label htmlFor="loginID">Login ID:</label>
        <input type="text" id="loginID" name="loginID" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </body>
  </html>
);

export default SecondPost;
