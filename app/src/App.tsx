import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
