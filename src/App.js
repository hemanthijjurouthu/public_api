import React, { useState, useEffect } from 'react';
import UserList from './UserList'; 

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="app">
      <UserList records={records} />
    </div>
  );
}

export default App;


