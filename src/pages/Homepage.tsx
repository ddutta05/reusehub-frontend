import { Link } from 'react-router-dom';
import { BookOpen, Laptop, Sofa, Bike, Shirt, Coffee, Users, Recycle } from 'lucide-react';
import ItemCard from '../components/ItemCard';
import { formatTaka } from '../utils/currency';

const Homepage = () => {
  const categories = [
    { id: 'Books', name: 'Books', icon: BookOpen, color: 'bg-blue-500', count: 245 },
    { id: 'Electronics', name: 'Electronics', icon: Laptop, color: 'bg-purple-500', count: 89 },
    { id: 'Home', name: 'Home', icon: Sofa, color: 'bg-green-500', count: 67 },
    { id: 'Clothing', name: 'Clothing', icon: Shirt, color: 'bg-pink-500', count: 156 },
    { id: 'Other', name: 'Other', icon: Coffee, color: 'bg-gray-500', count: 78 }
  ];

  const featuredItems = [
    {
      id: '1',
      title: 'Advanced Engineering Mathematics - 10th Edition',
      price: 800,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'like-new',
      category: 'Books',
      location: 'CUET Campus',
      timeAgo: '2 hours ago',
      seller: { name: 'Ahmed Rahman', verified: true }
    },
    {
      id: '2',
      title: 'MacBook Air M1 - 13 inch (2020)',
      price: 85000,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'good',
      category: 'Electronics',
      location: 'Hall 5',
      timeAgo: '5 hours ago',
      seller: { name: 'Fatima Khan', verified: true }
    },
    {
      id: '3',
      title: 'Study Desk with Chair - Wooden',
      price: 3500,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'good',
      category: 'Home',
      location: 'Near Gate 2',
      timeAgo: '1 day ago',
      seller: { name: 'Rafiq Islam', verified: false }
    },
    {
      id: '4',
      title: 'Calculus and Analytical Geometry - Complete Set',
      price: 1200,
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'like-new',
      category: 'Books',
      location: 'Library Area',
      timeAgo: '3 hours ago',
      seller: { name: 'Nadia Ahmed', verified: true }
    }
  ];

  const stats = [
    { id: 'reused', label: 'Items Reused', value: '2,847', icon: Recycle, color: 'text-green-600' },
    { id: 'users', label: 'Active Users', value: '1,234', icon: Users, color: 'text-blue-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              CUET Reuse Hub
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Buy, sell, and trade items within the CUET community. Sustainable, affordable, and convenient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/search"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Items
              </Link>
              <Link
                to="/post"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Post an Item
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-16">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/search?category=${category.id}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.count} items
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Latest Items
            </h2>
            <Link
              to="/search"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Sustainable Revolution at CUET
          </h2>
          <p className="text-lg mb-8 text-green-100">
            Every item you reuse helps reduce waste, save money, and build a stronger community.
          </p>
          <Link
            to="/post"
            className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Sharing Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;