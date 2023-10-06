import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="flex justify-between px-6 py-10">
            <div></div>
            <div className=" flex gap-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div>
                <img src="" alt="" />
                <NavLink to="/login" className="btn btn-success">Login </NavLink>
            </div>
        </div>
    );
};

export default NavBar;