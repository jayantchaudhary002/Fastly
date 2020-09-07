import React from 'react';

export default (
  <section>
    <h2>Login</h2>
    <form method="POST" action="/login">
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username"></input>
      <br/>

      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password"></input>
      <br/>

      <input type="submit" value="submit"/>
    </form>
  </section>
);

