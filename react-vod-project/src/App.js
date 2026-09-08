import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Page404 from "./pages/Page404";
import VodPage from "./pages/VodPage";
import VodInfoPage from "./pages/VodInfoPage";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<VodPage />} /> */}
        {/* so it will pop up immediately, meaning it is also the homepage */}
        <Route path="/"  element={<VodPage />} /> 
        <Route path="/vod"  element={<VodPage />} />
        <Route path="/vod/:imdbID" element={<VodInfoPage />} /> 
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
