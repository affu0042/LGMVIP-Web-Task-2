import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav>
        <div className="brand">Brand Name</div>
        <button onClick={getUsers}>Get Users</button>
      </nav>
      {loading ? (
        <div className="loader">Loading... </div>
      ) : (
        <div className="card-grid">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
