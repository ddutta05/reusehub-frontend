import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouteGuard from './components/RouteGuard';
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import ItemDetail from './pages/ItemDetail';
import PostItem from './pages/PostItem';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Verify from './pages/Verify';
import AdminUsers from './pages/AdminUsers';
import Feedback from './pages/Feedback';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={
                  <RouteGuard requireVerified={true}>
                    <Homepage />
                  </RouteGuard>
                } />
                <Route path="/search" element={
                  <RouteGuard requireVerified={true}>
                    <SearchResults />
                  </RouteGuard>
                } />
                <Route path="/item/:id" element={
                  <RouteGuard requireVerified={true}>
                    <ItemDetail />
                  </RouteGuard>
                } />
                <Route path="/post" element={
                  <RouteGuard requireVerified={true}>
                    <PostItem />
                  </RouteGuard>
                } />
                <Route path="/profile/:userId" element={
                  <RouteGuard requireVerified={true}>
                    <Profile />
                  </RouteGuard>
                } />
                <Route path="/chat" element={
                  <RouteGuard requireVerified={true}>
                    <Chat />
                  </RouteGuard>
                } />
                <Route path="/feedback" element={
                  <RouteGuard requireVerified={true}>
                    <Feedback />
                  </RouteGuard>
                } />
                <Route path="/admin/users" element={
                  <RouteGuard requireVerified={true} requireAdmin={true}>
                    <AdminUsers />
                  </RouteGuard>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/verify" element={<Verify />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;