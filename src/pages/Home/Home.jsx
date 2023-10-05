
import Header from "../Shared/Header/Header";
import LeftSidenav from "../Shared/LeftSideNav/LeftSidenav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LatestNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <LatestNews></LatestNews>
            <NavBar></NavBar>
            <div className="grid  grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                <LeftSidenav></LeftSidenav>
                </div>
                <div className="md:col-span-2 ">
                    <p>News comming soon</p>
                </div>
                <div>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;