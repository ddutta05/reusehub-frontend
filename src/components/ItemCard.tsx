import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star } from 'lucide-react';

interface ItemCardProps {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    condition: string;
    category: string;
    location: string;
    timeAgo: string;
    seller: {
      name: string;
      verified: boolean;
    };
  };
}

const ItemCard: React.FC<ItemCardProps> = memo(({ item }) => {
  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'like-new':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'good':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'fair':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'needs fixing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const formatTaka = (amount: number): string => {
    return `৳${amount.toLocaleString('en-BD')}`;
  };

  return (
    <Link
      to={`/item/${item.id}`}
      className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(item.condition)}`}>
            {item.condition}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {item.category}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {formatTaka(item.price)}
          </span>
        </div>

        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span className="mr-3">{item.location}</span>
          <Clock className="h-3 w-3 mr-1" />
          <span>{item.timeAgo}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {item.seller.name}
            </span>
            {item.seller.verified && (
              <Star className="h-4 w-4 text-blue-500 fill-current" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
});

export default ItemCard;