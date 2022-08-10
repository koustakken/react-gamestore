//router
import { Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Cart from './pages/Cart';
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
