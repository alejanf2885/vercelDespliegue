import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponents from "./components/HomeComponents";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        
      </Routes>
    </BrowserRouter>
  );
}
