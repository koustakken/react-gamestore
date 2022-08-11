//router
import { Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
//components
import Header from './components/Header';
//scss
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
