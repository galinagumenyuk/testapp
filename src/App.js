import "./App.css";
import { Suspense, lazy } from "react";
import Favicon from "react-favicon";
import Header from "./components/Header.jsx";

const Quote = lazy(() => import("../src/components/Quote.jsx"));

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <div className="container">
        <Favicon url="../public/favicon.ico" />
        <Quote />
        <Header />
      </div>
    </Suspense>
  );
}

export default App;
