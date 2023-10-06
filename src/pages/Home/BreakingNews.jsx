import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest News</button>
            <Marquee >
                <Link className="mr-5" to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit.</Link>
                <Link className="mr-5" to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit.</Link>
                <Link className="mr-5" to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sit.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;