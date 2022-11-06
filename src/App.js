import Header from './Component/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home/Home';
import Search from './Pages/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SingleVinyl from './Pages/SingleVinyl/SingleVinyl';
import Footer from './Component/Footer';
import ScrollToTop from './hooks/ScrollToTop ';
import { NotFoundPage } from './Pages/NotFoundPage';

const App = () => {
  return (

    <Router>
      <ScrollToTop />
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/vinyl/:id' element={<SingleVinyl />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
