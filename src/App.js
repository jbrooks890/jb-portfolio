import "./App.css";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:mode" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
