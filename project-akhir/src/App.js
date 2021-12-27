import './App.css';
import {
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound404 from "./pages/error/404";
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className="app">
        <h1 className='title'>Website Kita</h1>
        <nav className='nav'>
            <Link to='/' className="nav-item">Home</Link>
            <Link to='/blog' className="nav-item">Blog</Link>
            <Link to='/contact' className="nav-item">Contact</Link>
            <Link to='/profile' className="nav-item">Profile</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path='*' element={<NotFound404 />} />
        </Routes>
    </div>
  );
}

export default App;
