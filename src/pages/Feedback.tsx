import { useState } from 'react';
import { Star, Package, Calendar, MessageSquare, Filter, Search } from 'lucide-react';

interface SoldProduct {
  id: string;
  name: string;
  image: string;
  soldDate: string;
  soldPrice: number;
  buyerName: string;
  buyerAvatar: string;
  rating: number;
  review: string;
  category: string;
}

const Feedback = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Mock data for sold products with feedback
  const [soldProducts] = useState<SoldProduct[]>([
    {
      id: '1',
      name: 'Introduction to Algorithms (CLRS)',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300',
      soldDate: '2024-09-15',
      soldPrice: 1200,
      buyerName: 'Ahmed Rahman',
      buyerAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150',
      rating: 5,
      review: 'Excellent condition! The book was exactly as described. Very helpful for my algorithms course. Fast delivery and great communication from the seller.',
      category: 'Books'
    },
    {
      id: '2',
      name: 'MacBook Air M1 (2021)',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300',
      soldDate: '2024-09-10',
      soldPrice: 75000,
      buyerName: 'Fatima Khan',
      buyerAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150',
      rating: 4,
      review: 'Great laptop in good condition. Minor scratches as mentioned but works perfectly. Battery life is still excellent. Happy with the purchase!',
      category: 'Electronics'
    },
    {
      id: '3',
      name: 'Engineering Mechanics Textbook',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300',
      soldDate: '2024-09-08',
      soldPrice: 800,
      buyerName: 'Mohammad Ali',
      buyerAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=150',
      rating: 5,
      review: 'Perfect textbook for my mechanics course. Clean pages, no markings. Seller was very responsive and helpful.',
      category: 'Books'
    },
    {
      id: '4',
      name: 'iPhone 12 Pro',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300',
      soldDate: '2024-09-05',
      soldPrice: 55000,
      buyerName: 'Nusrat Jahan',
      buyerAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150',
      rating: 3,
      review: 'Phone works fine but battery health is lower than expected. Overall decent purchase for the price.',
      category: 'Electronics'
    },
    {
      id: '5',
      name: 'Calculus by James Stewart',
      image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300',
      soldDate: '2024-08-28',
      soldPrice: 950,
      buyerName: 'Rashid Hassan',
      buyerAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150',
      rating: 5,
      review: 'Excellent condition textbook. All pages intact and very clean. Great for calculus studies. Highly recommend this seller!',
      category: 'Books'
    }
  ]);

  // Filter and sort products
  const filteredProducts = soldProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.buyerName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating = filterRating === 'all' || 
                          (filterRating === '5' && product.rating === 5) ||
                          (filterRating === '4' && product.rating === 4) ||
                          (filterRating === '3' && product.rating <= 3);
      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.soldDate).getTime() - new Date(a.soldDate).getTime();
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'price') {
        return b.soldPrice - a.soldPrice;
      }
      return 0;
    });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = soldProducts.reduce((sum, product) => sum + product.rating, 0) / soldProducts.length;
  const totalRevenue = soldProducts.reduce((sum, product) => sum + product.soldPrice, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Sales Feedback
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Reviews and ratings from your past customers
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {soldProducts.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Items Sold
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {averageRating.toFixed(1)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Average Rating
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {soldProducts.filter(p => p.review.length > 0).length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reviews Received
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <span className="text-2xl">৳</span>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Revenue
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products or buyers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Rating Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars & Below</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Feedback List */}
        <div className="space-y-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Sold on {new Date(product.soldDate).toLocaleDateString()}
                          </span>
                          <span className="font-semibold text-green-600 dark:text-green-400">
                            ৳{product.soldPrice.toLocaleString()}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Buyer Info and Rating */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={product.buyerAvatar}
                          alt={product.buyerName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900 dark:text-white">
                                {product.buyerName}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                • Buyer
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {renderStars(product.rating)}
                              <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                                ({product.rating}/5)
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {product.review}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No feedback found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {searchQuery || filterRating !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'You haven\'t received any feedback yet'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;