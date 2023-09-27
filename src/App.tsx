import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/detalle/DetailPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route  path="/carta/:carta/:inventario" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;