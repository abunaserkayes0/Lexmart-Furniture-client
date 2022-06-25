import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Resister from "./Components/Resister/Resister";
import SignIn from "./Components/SignIn/SignIn";
function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/resister" element={<Resister></Resister>}></Route>
      </Routes>
    </div>
  );
}

export default App;
