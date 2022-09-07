import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactDetails from "./components/contactDetails";
import PageNotFound from "./components/pageNotFound";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ContactDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
