import Header from './Component/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home/Home';
import Search from './Pages/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
