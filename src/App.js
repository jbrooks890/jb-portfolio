import "./App.css";
import Footer from "./components/shared/Footer";
import Main from "./components/shared/Main";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/frags/Resume";
import { ModeProvider } from "./components/shared/ModeProvider";
import ResumePage from "./components/pages/ResumePage";

function App() {
  return (
    <div className="App">
      <ModeProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:mode" element={<Main />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </ModeProvider>
      <Footer />
    </div>
  );
}

export default App;
