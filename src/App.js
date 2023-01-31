import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SearchVinyl from "./Pages/SearchVinyl/SearchVinyl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleVinyl from "./Pages/SingleVinyl/SingleVinyl";
import ScrollToTop from "./hooks/ScrollToTop ";
import { NotFoundPage } from "./Pages/NotFoundPage";
import SingleTurnTable from "./Pages/SingleTurnTable/SingleTurnTable";
import NewsLetter from "./Component/NewsLetter/NewsLetter";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/SearchVinyl" element={<SearchVinyl />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/vinyl/:id" element={<SingleVinyl />} />
          <Route path="/turnTable/:id" element={<SingleTurnTable />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <NewsLetter />
      <Footer />
    </Router>
  );
};

export default App;
