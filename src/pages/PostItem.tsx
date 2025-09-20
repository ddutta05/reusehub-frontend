import React, { useState } from 'react';
import { Camera, X, MapPin, Tag, DollarSign, FileText, Package } from 'lucide-react';

const PostItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    price: '',
    originalPrice: '',
    location: '',
    tags: '',
    contactMethod: 'chat'
  });
  
  const [images, setImages] = useState<string[]>([]);

  const categories = [
    'Books',
    'Electronics',
    'Home',
    'Clothing',
    'Other'
  ];

  const conditions = [
    { value: 'like-new', label: 'Like New', description: 'Barely used, excellent condition' },
    { value: 'good', label: 'Good', description: 'Used but well maintained' },
    { value: 'fair', label: 'Fair', description: 'Shows wear but still functional' },
    { value: 'needs-fixing', label: 'Needs Fixing', description: 'Requires repair or maintenance' }
  ];

  const locations = [
    'CUET Campus',
    'Hall 1 (Bangabandhu Hall)',
    'Hall 2 (Kazi Nazrul Islam Hall)', 
    'Hall 3 (Dr. M. A. Rashid Hall)',
    'Hall 4 (Shahjalal Hall)',
    'Hall 5 (Shaheed Abdur Rab Serniabat Hall)',
    'Near Main Gate',
    'Academic Area',
    'Near Library',
    'Faculty Area',
    'Staff Quarter',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you'd upload these to a server
      // For demo, we'll create object URLs
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages].slice(0, 8)); // Max 8 images
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    console.log('Images:', images);
    alert('Item posted successfully! (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Post an Item</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Share your items with the CUET community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Images Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Photos (up to 8)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                {images.length < 8 && (
                  <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <Camera className="h-6 w-6 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Add Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                First photo will be your main image. JPG, PNG up to 10MB each.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Package className="inline h-4 w-4 mr-1" />
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., iPhone 12 - 64GB Blue"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Condition */}
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Condition *
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select condition</option>
                  {conditions.map((cond) => (
                    <option key={cond.value} value={cond.value}>
                      {cond.label} - {cond.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price (৳) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="0"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Set to 0 for free items
                </p>
              </div>

              {/* Original Price */}
              <div>
                <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Original Price (৳)
                </label>
                <input
                  type="number"
                  id="originalPrice"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  placeholder="Optional"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Show savings to buyers
                </p>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Pickup Location *
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Tag className="inline h-4 w-4 mr-1" />
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., engineering, textbook, mathematics"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Separate tags with commas
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <FileText className="inline h-4 w-4 mr-1" />
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                placeholder="Describe your item in detail. Include any relevant information that buyers should know..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Be detailed and honest about the item's condition
              </p>
            </div>

            {/* Contact Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Preferred Contact Method
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="chat"
                    checked={formData.contactMethod === 'chat'}
                    onChange={handleInputChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    In-app Chat (Recommended)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={handleInputChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    CUET Email
                  </span>
                </label>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Before you post:
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Make sure you own the item and have the right to sell it</li>
                <li>• Be honest about the condition and any defects</li>
                <li>• Only CUET students, faculty, and staff can use this platform</li>
                <li>• Prohibited items: weapons, illegal substances, counterfeit goods</li>
                <li>• You're responsible for safe meetup arrangements</li>
              </ul>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Post Item
              </button>
              <button
                type="button"
                className="flex-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostItem;