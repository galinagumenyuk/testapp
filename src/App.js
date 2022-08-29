import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Favicon from "react-favicon";
import Navigate from "./components/Navigate";
import Home from "./components/Home";
const Quotes = lazy(() => import("./components/Quotes.jsx"));
const Profile = lazy(() => import("./components/Profile.jsx"));
const QuotePage = lazy(() => import("./components/QuotesPage"));

function App() {
  return (
    <div className="container">
      <Navigate />

      <Favicon url="../public/favicon.ico" />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quotes/:theme" element={<QuotePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
