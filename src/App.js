import React, { Suspense } from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
// import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop ";
import { NotFoundPage } from "./Pages/NotFoundPage";
import SingleTurnTable from "./Pages/SingleTurnTable/SingleTurnTable";
import NewsLetter from "./Component/NewsLetter/NewsLetter";
import Contact from "./Pages/Contact/Contact";
import Loading from "./Component/Loading";

// Lazy Loading for better performance
const LazyHome = React.lazy(() => import("./Pages/Home/Home"));
const LazyStore = React.lazy(() => import("./Pages/SearchVinyl/SearchVinyl"));
const LazySingleVinyl = React.lazy(() =>
  import("./Pages/SingleVinyl/SingleVinyl")
);
const LazyCart = React.lazy(() => import("./Pages/Cart/Cart"));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<LazyHome />} />
            <Route path="/SearchVinyl" element={<LazyStore />} />
            <Route path="/cart" element={<LazyCart />} />
            <Route path="/vinyl/:id" element={<LazySingleVinyl />} />
            <Route path="/turnTable/:id" element={<SingleTurnTable />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <NewsLetter />
      <Footer />
    </Router>
  );
};

export default App;
