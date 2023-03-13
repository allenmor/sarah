import Navbar from "./Navbar";
import Messages from "./Messages";
import { Routes, Route } from "react-router-dom";
import DataModels from "./DataModels";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Messages />} />
        <Route path="/data" element={<DataModels />} />
      </Routes>
    </div>
  );
}

export default App;
