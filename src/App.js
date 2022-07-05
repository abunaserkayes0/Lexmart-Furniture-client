import "bootstrap/dist/css/bootstrap.min.css";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import Home from "./Components/Home/Home";
import InventoryDetails from "./Components/InventoryDetails/InventoryDetails";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import Navigation from "./Components/Navigation/Navigation";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Resister from "./Components/Resister/Resister";
import SignIn from "./Components/SignIn/SignIn";
export const MyContext = createContext(0);

function App() {
  return (
    <div>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signIn" element={<SignIn></SignIn>}></Route>
          <Route path="/resister" element={<Resister></Resister>}></Route>
          <Route
            path="/inventory/:id"
            element={
              <RequireAuth>
                <InventoryDetails></InventoryDetails>
              </RequireAuth>
            }
          ></Route>
          <Route path="/addItem" element={<AddItem></AddItem>}></Route>
          <Route
            path="/manageTable"
            element={<ManageInventory></ManageInventory>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
