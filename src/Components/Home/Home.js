import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch/GetInTouch";
import Inventories from "../Inventories/Inventories";
import Reviews from "../Reviews/Reviews";
import TopCategories from "../TopCategories/TopCategories";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories/>
      <TopCategories></TopCategories>
      <GetInTouch></GetInTouch>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
