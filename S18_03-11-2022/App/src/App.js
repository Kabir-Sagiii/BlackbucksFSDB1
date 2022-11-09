import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Headers/Header";
import Main from "./Components/Main/Main.js";
import Count from "./Components/Count/Count";
import Image from "./Components/Image/Image";
import PropsImage from "./Components/PropsImage/Image";
import Profile from "./Components/ProfileCard/Profile";
import UseEffect from "./Components/UseEffect/useEffect";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // className = class
  return (
    <div className="App" id="">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Count />} />
          <Route
            path="/profile"
            element={
              <Profile
                img="https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg"
                name="Darsh"
                email="darsh@gmail.com"
                gender="male"
              />
            }
          />
          <Route path="/image" element={<Image />} />
          <Route path="/useeffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
