import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import About from "./About";
import "../Styles/App.css";
import Projects from "./Projects";
import DropdownMenu from "./DropdownMenu";
function App() {
  return (
    <BrowserRouter>
      <DropdownMenu />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
