import React, { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info } from 'lucide-react';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState('1');
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: '1',
      user: {
        name: 'Fatima Khan',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      lastMessage: 'Is the book still available?',
      lastMessageTime: '2 min ago',
      unreadCount: 2,
      item: {
        title: 'Advanced Engineering Mathematics',
        price: 800,
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    },
    {
      id: '2',
      user: {
        name: 'Rafiq Islam',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      lastMessage: 'Can you meet at 3 PM near the library?',
      lastMessageTime: '1 hour ago',
      unreadCount: 0,
      item: {
        title: 'Study Desk with Chair',
        price: 3500,
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    },
    {
      id: '3',
      user: {
        name: 'Nadia Ahmed',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      lastMessage: 'Thanks for the quick response!',
      lastMessageTime: '2 days ago',
      unreadCount: 0,
      item: {
        title: 'MacBook Air M1',
        price: 85000,
        image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    }
  ];

  const messages = [
    {
      id: '1',
      sender: 'other',
      content: 'Hi! I saw your listing for the Advanced Engineering Mathematics book. Is it still available?',
      time: '2:30 PM',
      date: 'Today'
    },
    {
      id: '2',
      sender: 'me',
      content: 'Hello! Yes, the book is still available. It\'s in excellent condition with no markings.',
      time: '2:32 PM',
      date: 'Today'
    },
    {
      id: '3',
      sender: 'other',
      content: 'Great! Can you tell me more about the condition? Any missing pages or damage?',
      time: '2:33 PM',
      date: 'Today'
    },
    {
      id: '4',
      sender: 'me',
      content: 'No missing pages at all, and the binding is perfect. I\'ve kept it very carefully. You can check it out when we meet.',
      time: '2:35 PM',
      date: 'Today'
    },
    {
      id: '5',
      sender: 'other',
      content: 'Sounds perfect! When would be a good time to meet? I\'m flexible this week.',
      time: '2:40 PM',
      date: 'Today'
    },
    {
      id: '6',
      sender: 'me',
      content: 'How about tomorrow around 4 PM? We could meet near the library.',
      time: '2:42 PM',
      date: 'Today'
    },
    {
      id: '7',
      sender: 'other',
      content: 'Perfect! I\'ll be there at 4 PM tomorrow. Should I bring exact change?',
      time: '3:45 PM',
      date: 'Today'
    },
    {
      id: '8',
      sender: 'other',
      content: 'Also, is the book still ₹800?',
      time: '3:46 PM',
      date: 'Today'
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Chat List Sidebar */}
      <div className="w-1/3 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                selectedChat === conversation.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={conversation.user.avatar}
                    alt={conversation.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${getStatusColor(conversation.user.status)}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-white truncate">
                      {conversation.user.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {conversation.lastMessageTime}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-1">
                    {conversation.lastMessage}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <img
                    <img
                      src={conversation.user.avatar}
                      alt={conversation.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.unreadCount > 0 && (
                      <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      {selectedConversation ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={selectedConversation.user.avatar}
                alt={selectedConversation.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {selectedConversation.user.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                <Phone className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                <Video className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                <Info className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Item Info Card */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <img
                src={selectedConversation.item.image}
                alt={selectedConversation.item.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {selectedConversation.item.title}
                </h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  ₹{selectedConversation.item.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.sender === 'me' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                <Paperclip className="h-5 w-5" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Select a conversation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Choose a conversation from the sidebar to start messaging
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;