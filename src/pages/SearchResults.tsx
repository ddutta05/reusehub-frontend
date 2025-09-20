import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, MapPin, Clock, Grid, List } from 'lucide-react';
import ItemCard from '../components/ItemCard';
import { formatTaka } from '../utils/currency';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [condition, setCondition] = useState('all');
  const [location, setLocation] = useState('all');

  const mockResults = [
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
      title: 'iPhone 12 - 64GB Blue',
      price: 45000,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'good',
      category: 'Electronics',
      location: 'CSE Building',
      timeAgo: '3 days ago',
      seller: { name: 'Sadia Rahman', verified: true }
    },
    {
      id: '5',
      title: 'Digital Signal Processing Book',
      price: 600,
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'like-new',
      category: 'Books',
      location: 'Library Area',
      timeAgo: '1 week ago',
      seller: { name: 'Karim Ahmed', verified: false }
    },
    {
      id: '6',
      title: 'Gaming Chair - Ergonomic',
      price: 8000,
      image: 'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'good',
      category: 'Home',
      location: 'Hall 3',
      timeAgo: '2 days ago',
      seller: { name: 'Tamim Hassan', verified: true }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Results Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {query ? `Search results for "${query}"` : category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Items'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {mockResults.length} items found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </h3>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price Range (₹)
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>₹0</span>
                    <span>{formatTaka(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Condition
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Conditions</option>
                  <option value="like-new">Like New</option>
                  <option value="good">Good</option>
                  <option value="needs-fixing">Needs Fixing</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Locations</option>
                  <option value="campus">CUET Campus</option>
                  <option value="hall-1">Hall 1</option>
                  <option value="hall-2">Hall 2</option>
                  <option value="hall-3">Hall 3</option>
                  <option value="hall-4">Hall 4</option>
                  <option value="hall-5">Hall 5</option>
                </select>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Categories
                </label>
                <div className="space-y-2">
                  {['Books', 'Electronics', 'Home', 'Clothing', 'Other'].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-md">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Sort by:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="nearest">Nearest</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Items Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {mockResults.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Load More Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;