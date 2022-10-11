import "./App.css";
import Footer from "./components/shared/Footer";
import Main from "./components/shared/Main";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/frags/Resume";
import { ModeProvider } from "./components/shared/ModeProvider";

function App() {
  return (
    <div id="top" className="App">
      <ModeProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:mode" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </ModeProvider>
      <Footer />
    </div>
  );
}

export default App;
