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

function App() {
  // className = class
  return (
    <div className="App" id="">
      <Nav />
      <Count />
      <div className="container">
        <Profile
          img="https://th.bing.com/th/id/OIP.95Dq87noL4QXFfFaehT5fgHaJ6?pid=ImgDet&rs=1"
          name="Chris John"
          gender="Male"
          email="Chris@gmail.com"
        />
        <Profile
          img="https://th.bing.com/th/id/OIP.j4uqoQqHX14hsF1y5Xs4BQHaLG?pid=ImgDet&rs=1"
          name="Zui"
          gender="Male"
          email="Zui@gmail.com"
        />
        <Profile
          img="https://i.quotev.com/img/q/u/19/7/21/qba4cggge6.jpg"
          name="Alina"
          gender="Female"
          email="Alina@gmail.com"
        />
        <Profile
          img="https://d1anz62hzt62y8.cloudfront.net/Images/7/2/B/1E9C2-967B-9110-4C09-7DBC04AF79AF.jpg"
          name="Ziya"
          gender="Female"
          email="Ziya@gmail.com"
        />
      </div>

      <UseEffect />
    </div>
  );
}

export default App;
