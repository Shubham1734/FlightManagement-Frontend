import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {getUsers} from '../../services/adminservice'

const ViewUsers: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
    };
    fetchUsers();
  }, []);

  return (
    <div className="view-users">
        <header className="header">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/add-flight">Add New Flight</Link>
          <Link to="/view-users">View Users</Link>
          <Link to="/view-bookings">View Bookings</Link>
        </nav>
      </header>
      <h1>View Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>phone</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
