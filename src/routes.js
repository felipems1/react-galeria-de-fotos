import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Album from "./pages/Album/Album";
import Photo from "./pages/Photo/Photo";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:album" exact element={<Album />} />
        <Route path="/:album/:photo" exact element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
