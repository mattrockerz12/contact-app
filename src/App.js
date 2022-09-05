import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notFound";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
