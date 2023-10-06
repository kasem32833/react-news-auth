import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);


    const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photoUrl = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, email, password, photoUrl);


    createUser(email, password)
    .then((result)=>{
        console.log('User registration successfully')
    })
    .catch((error)=>{
        console.log(error.message)
    })
  };
  return (
    <div>
      <NavBar></NavBar>
      <p className="text-center text-2xl mb-10">Register Your Account</p>
      <div className="  w-1/2 mx-auto bg-gray-200 rounded-lg">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                required
                />
          </div>
          <div className="form-control">
                <label className="label">
                <span className="label-text">Photo Url</span>
                </label>
                <input
                type="text"
                placeholder="Your Image Url"
                className="input input-bordered"
                name="photo"
                
                />
          </div>
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
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center py-6">
          Already have an accout please{" "}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
