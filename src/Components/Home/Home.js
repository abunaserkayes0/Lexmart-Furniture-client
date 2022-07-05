import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Inventories from "../Inventories/Inventories";
import Reviews from "../Reviews/Reviews";
import TopCategories from "../TopCategories/TopCategories";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories/>
      <Reviews></Reviews>
      <TopCategories></TopCategories>
      <Footer></Footer>
    </div>
  );
};

export default Home;
