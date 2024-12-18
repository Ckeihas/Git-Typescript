import React, { useState } from 'react';

function UserGreeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Logged out</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
    </div>
  );
}

export default UserGreeting;
