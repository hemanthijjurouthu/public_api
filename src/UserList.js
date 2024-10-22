
import React from 'react';
import './App.css';

function UserList({ records }) {
  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul className="user-list-ul">
        {records.map((user) => (
          <li key={user.id} className="user-list-item">
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
