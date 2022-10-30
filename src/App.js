import "./App.css";
import { Route, Routes } from "react-router-dom";
import FormSubmission from "./pages/formSubmission";
import { useState } from "react";
import UserDetail from "./components/userDetail";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormSubmission />} />
        <Route path="/userDetails/:namaLengkap" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
