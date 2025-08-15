// Style
import "/src/index.css";
import "./Profiles.css";

// React
import { useEffect, useState } from "react";
import { Link } from "react-router";

// Components
import TranslateButton from "../../Contexts/TranslateButton";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const userList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("U")) {
        // Skip JWT tokens
        try {
          const user = JSON.parse(localStorage.getItem(key));
          userList.push({ ...user, storageKey: key });
        } catch (err) {
          continue;
        }
      }
    }
    setUsers(userList);
  };
  

  const removeUser = (storageKey) => {
    localStorage.removeItem(storageKey);
    loadUsers(); // Refresh the list
  };

  return (
    <>
      <div className="user-management-container">
        <h2>User Management Panel</h2>

        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>User Type</th>
                <th>User Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.storageKey}>
                    <td>{user.name || "No name"}</td>
                    <td>{user.userType}</td>
                    <td>{user.email || "No email"}</td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => removeUser(user.storageKey)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="no-users">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <TranslateButton />
          <Link to="/" className="button">
            <i className="fas fa-home me-2" />
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
