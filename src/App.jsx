import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Projects } from "./pages/Projects";
import { EasyLab } from "./pages/Projects/EasyLab";
import { Ideal } from "./pages/Projects/Ideal";
import { Container } from "./components/Container";
import { CoffeeHouse } from "./pages/Projects/CoffeeHouse";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/easylab" element={<EasyLab />} />
        <Route path="/projects/ideal" element={<Ideal />} />
        <Route path="/projects/coffeehouse" element={<CoffeeHouse />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
