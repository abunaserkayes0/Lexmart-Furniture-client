import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Reviews from '../Reviews/Reviews';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;