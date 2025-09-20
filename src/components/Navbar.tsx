import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, Heart, MessageCircle, User, Sun, Moon, Bell, Plus, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RH</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">CUET Reuse Hub</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for items, books, electronics..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => toggleTheme()}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {user ? (
              <>
                {/* Post Item */}
                <Link
                  to="/post"
                  className="hidden sm:flex items-center space-x-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span className="text-sm font-medium">Post Item</span>
                </Link>

                {/* Notifications */}
                <button className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>

                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Heart className="h-5 w-5" />
                </Link>

                {/* Messages */}
                <Link
                  to="/chat"
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="hidden sm:block text-sm font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </span>
                  </button>

                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                      <Link
                        to={`/profile/${user.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/my-items"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        My Items
                      </Link>
                      {user.isAdmin && (
                        <Link
                          to="/admin/users"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Settings className="inline h-4 w-4 mr-2" />
                          Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          logout();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Sign In</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for items..."
              className="w-full px-4 py-2 pl-10 pr-20 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <button
              type="submit"
              className="absolute right-2 top-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;