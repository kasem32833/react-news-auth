import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const  email = e.target
    }
  return (
    <div>
      <NavBar></NavBar>
      <p className="text-center text-2xl mb-10">Please Login</p>
      <div className="  w-1/2 mx-auto bg-gray-200 rounded-lg">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center py-6">Do not have an accout please <Link to="/register" className="text-red-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
