import React from 'react';
import { useAuth } from '../context/AuthProvider';

const Logout = () => {
  const [authUser, setAuthUser] = useAuth(); // Access the context

  const handleLogout = () => {
    try {
      // Clear the local storage and context
      setAuthUser(null);
      localStorage.removeItem('Users');
      alert('Logout Successfully');
      window.location.reload(); // Reload the page after logout
    } catch (err) {
      alert('Error during logout: ' + err.message);
    }
  };

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
