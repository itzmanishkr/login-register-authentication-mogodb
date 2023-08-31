import mongoose from "mongoose";
import { Link } from "react-router-dom";


const Home = () => {

    
  

    
  return (
    <div style= {{backgroundImage : "linear-gradient(rgb(0, 102, 102),rgb(0, 255, 153))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>Login Success Page</h1>
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
    </div>
  )
}

export default Home;