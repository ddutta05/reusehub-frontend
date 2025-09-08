import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Star, MessageCircle, Flag, Shield, Package, Heart, Clock } from 'lucide-react';
import ItemCard from '../components/ItemCard';

const Profile = () => {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState('items');

  const profile = {
    id: '123',
    name: 'Ahmed Rahman',
    email: 'ahmed.rahman@student.cuet.ac.bd',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    verified: true,
    joinDate: '2023-01-15',
    lastSeen: '2 hours ago',
    department: 'Mechanical Engineering',
    year: '4th Year',
    studentId: '1901001',
    bio: 'Engineering student passionate about sustainable living. Selling textbooks and tech items to help fellow students save money.',
    stats: {
      itemsPosted: 24,
      itemsSold: 18,
      rating: 4.8,
      reviews: 15,
      responseTime: '~2 hours',
      followers: 32
    },
    badges: [
      { name: 'Verified Student', icon: Shield, color: 'text-blue-500' },
      { name: 'Quick Responder', icon: Clock, color: 'text-green-500' },
      { name: 'Top Seller', icon: Star, color: 'text-yellow-500' }
    ]
  };

  const userItems = [
    {
      id: '1',
      title: 'Advanced Engineering Mathematics - 10th Edition',
      price: 800,
      originalPrice: 1200,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'Like New',
      category: 'Books',
      location: 'CUET Campus',
      timeAgo: '2 hours ago',
      seller: { name: 'Ahmed Rahman', verified: true }
    },
    {
      id: '2',
      title: 'Wireless Bluetooth Headphones',
      price: 2500,
      originalPrice: 4000,
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'Good',
      category: 'Electronics',
      location: 'Hall 3',
      timeAgo: '1 day ago',
      seller: { name: 'Ahmed Rahman', verified: true }
    },
    {
      id: '3',
      title: 'Scientific Calculator - Casio FX-991',
      price: 1200,
      originalPrice: 1800,
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=300',
      condition: 'Like New',
      category: 'Electronics',
      location: 'Academic Area',
      timeAgo: '3 days ago',
      seller: { name: 'Ahmed Rahman', verified: true }
    }
  ];

  const reviews = [
    {
      id: '1',
      reviewer: {
        name: 'Fatima Khan',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      rating: 5,
      comment: 'Great seller! Book was exactly as described and pickup was smooth.',
      date: '2 days ago',
      item: 'Advanced Engineering Mathematics'
    },
    {
      id: '2',
      reviewer: {
        name: 'Rafiq Islam',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      rating: 5,
      comment: 'Very responsive and helpful. Highly recommended!',
      date: '1 week ago',
      item: 'Study Lamp'
    },
    {
      id: '3',
      reviewer: {
        name: 'Nadia Ahmed',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      rating: 4,
      comment: 'Good condition as promised. Quick transaction.',
      date: '2 weeks ago',
      item: 'Programming Textbook'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {profile.name}
                </h1>
                {profile.verified && (
                  <Shield className="h-6 w-6 text-blue-500 fill-current" />
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {profile.department} • {profile.year}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {profile.bio}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Last seen {profile.lastSeen}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>CUET Campus</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Message</span>
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Flag className="h-4 w-4" />
                <span>Report</span>
              </button>
            </div>
          </div>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {profile.badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
              >
                <badge.icon className={`h-4 w-4 ${badge.color}`} />
                <span className="text-gray-700 dark:text-gray-300">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {profile.stats.itemsPosted}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Items Posted</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {profile.stats.itemsSold}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Items Sold</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {profile.stats.rating}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {profile.stats.reviews}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Reviews</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('items')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'items'
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <Package className="inline h-4 w-4 mr-2" />
              Items ({userItems.length})
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <Star className="inline h-4 w-4 mr-2" />
              Reviews ({reviews.length})
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'items' && (
              <div>
                {userItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userItems.map((item) => (
                      <ItemCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      No items posted yet
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This user hasn't posted any items for sale.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.reviewer.avatar}
                          alt={review.reviewer.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {review.reviewer.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {review.item} • {review.date}
                              </p>
                            </div>
                            <div className="flex items-center space-x-1">
                              {renderStars(review.rating)}
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      No reviews yet
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This user hasn't received any reviews.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;