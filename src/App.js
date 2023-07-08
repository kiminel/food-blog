import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PostsByCategory from "./pages/PostsByCategory";
import SearchResults from "./pages/SearchResults";
import RecipeView from "./pages/RecipeView";
import About from "./pages/About";

const App = () => {
  return (
    <div className="font-Catamaran w-full min-h-screen flex flex-col justify-between bg-fill overflow-hidden">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<PostsByCategory />} />
          <Route path="/search/:slug" element={<SearchResults />} />
          <Route path="/recipe/:slug" element={<RecipeView />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
