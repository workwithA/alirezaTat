import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="w-screen max-w-[1536px] h-scree mx-auto relative overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
