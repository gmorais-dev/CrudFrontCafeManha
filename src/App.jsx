import { BrowserRouter, Route, Routes } from "react-router-dom";
import InsertCafeDaManha from "./pages/CafeDaManha/Insert/InsertCafeDaManha";
import Header from "./components/common/Header";
import "./style.css";
import ListCafe from "./pages/CafeDaManha/ListCafe/ListCafe";
import UpdateCafe from "./pages/CafeDaManha/updateCafe/UpdateCafe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListCafe />} />
        <Route path="/insertCafe" element={<InsertCafeDaManha />} /> 
        <Route path="/updateCafe/:id" element={<UpdateCafe />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
