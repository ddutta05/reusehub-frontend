import React, { useState } from 'react';
import { Search, Trash2, Shield, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
  joinDate: string;
  department: string;
  year: string;
  totalItems: number;
  isAdmin: boolean;
}

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Sarah Ahmed',
      email: 'sarah.ahmed@student.cuet.ac.bd',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      joinDate: '2024-01-15',
      department: 'Computer Science',
      year: '3rd Year',
      totalItems: 12,
      isAdmin: false
    },
    {
      id: '2',
      name: 'Ahmed Rahman',
      email: 'ahmed.rahman@student.cuet.ac.bd',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      joinDate: '2023-01-15',
      department: 'Mechanical Engineering',
      year: '4th Year',
      totalItems: 24,
      isAdmin: false
    },
    {
      id: '3',
      name: 'Fatima Khan',
      email: 'fatima.khan@student.cuet.ac.bd',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: false,
      joinDate: '2024-03-20',
      department: 'Electrical Engineering',
      year: '2nd Year',
      totalItems: 5,
      isAdmin: false
    },
    {
      id: '4',
      name: 'Rafiq Islam',
      email: 'rafiq.islam@student.cuet.ac.bd',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      joinDate: '2023-09-10',
      department: 'Civil Engineering',
      year: '2nd Year',
      totalItems: 8,
      isAdmin: false
    }
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteUser = async (userId: string) => {
    try {
      // In a real app, this would call DELETE /api/admin/users/:id
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
        setShowDeleteModal(null);
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      // For demo purposes, we'll still remove the user from the list
      setUsers(users.filter(user => user.id !== userId));
      setShowDeleteModal(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            User Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage CUET Reuse Hub users and their accounts
          </p>
        </div>

        {/* Search and Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search users by name, email, or department..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex space-x-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {users.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Total Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {users.filter(u => u.verified).length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Verified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {users.filter(u => !u.verified).length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Unverified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {user.name}
                            </div>
                            {user.isAdmin && (
                              <Shield className="h-4 w-4 text-purple-500" />
                            )}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {user.department}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.year}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.verified ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Unverified
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {user.totalItems}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => setShowDeleteModal(user.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-500 dark:text-gray-400">
                No users found matching your search criteria.
              </div>
            </div>
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Delete User
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to delete this user? This action cannot be undone and will remove all their items and data.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleDeleteUser(showDeleteModal)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Delete User
                </button>
                <button
                  onClick={() => setShowDeleteModal(null)}
                  className="flex-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;