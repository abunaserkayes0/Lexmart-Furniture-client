import { useContext } from "react";
import { MyContext } from "../../App";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Inventories from "../Inventories/Inventories";
import Reviews from "../Reviews/Reviews";
import TopCategories from "../TopCategories/TopCategories";
import "./Home.css";
const Home = () => {
  const [callback, setCallback] = useContext(MyContext);
  return (
    <div>
      <Banner></Banner>
      <Inventories callback={callback}/>
      <Reviews></Reviews>
      <TopCategories></TopCategories>
      <Footer></Footer>
    </div>
  );
};

export default Home;
