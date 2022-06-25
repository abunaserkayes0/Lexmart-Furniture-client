import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Reviews from '../Reviews/Reviews';
import TopCategories from '../TopCategories/TopCategories';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Reviews></Reviews>
            <TopCategories></TopCategories>
        </div>
    );
};

export default Home;