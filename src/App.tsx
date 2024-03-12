import "./App.css";
import Nabvar from "./Components/Nabvar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nabvar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
