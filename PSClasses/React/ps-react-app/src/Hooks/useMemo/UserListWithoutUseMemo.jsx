import React, { useEffect, useState } from 'react';

const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice Johnson' },
        { id: 2, name: 'Bob Smith' },
        { id: 3, name: 'Charlie Brown' },
        { id: 4, name: 'David Williams' },
        { id: 5, name: 'Eva Green' },
      ]);
    }, 1000);
  });
};

const UserListWithoutUseMemo = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  // Filtering without memoization
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>UserList without useMemo</h1>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {filteredUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserListWithoutUseMemo;
