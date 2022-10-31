import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Headers/Header";
import Main from "./Components/Main/Main.js";
import Count from "./Components/Count/Count";
import Image from "./Components/Image/Image";
import PropsImage from "./Components/PropsImage/Image";

function App() {
  // className = class
  return (
    <div className="App" id="">
      <div className="container">
        <PropsImage
          img="https://www.mobilepagla.com/wp-content/uploads/2021/05/Apple-iPhone-14-Pro-Max.jpg"
          id="101"
        />
        <PropsImage
          img="https://assets.swappie.com/cdn-cgi/image/width=300,height=300,fit=contain,format=auto/iphone11vihreaCC88-300x300.jpg"
          id="102"
        />
        <PropsImage
          id="103"
          img="https://th.bing.com/th/id/OIP.BF36zp4sFSpq58l-VETGJQHaHa?pid=ImgDet&w=600&h=600&rs=1"
        />
      </div>
    </div>
  );
}

export default App;
