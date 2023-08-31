
import { useState } from "react";
import {FaUserAlt} from "react-icons"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import DatePicker from 'react-datepicker'

function App() {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setdob] = useState("");


  const registerUser = (event) => {
    event.preventDefault();

    axios.post('http://localhost:1337/api/register', { name, email, password, dob })
      .then(result => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate('/login');
        }
        else {
          alert("Registered successfully! Please Login to proceed.")
          navigate('/login');
        }

      })
      .catch(err => console.log(err));
  }
  function gotoLogin() {

  }

  return (
    <div  style= {{backgroundImage : "linear-gradient(rgb(0, 102, 102),rgb(0, 255, 153))"}} class="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <div className="mb-3">

            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">

              </span>
              <input
                className="form-control rounded-0"
                type='text'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                placeholder='Name'
              />
            </div>

          </div>
          <div className="mb-3">

            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">@</span>

              <input
                className="form-control rounded-0"
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>

          </div>

          <div className="mb-3">
            <input
              className="form-control rounded-0"
              type='password'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder='Password' />
          </div>


          <div className="mb-3">
            <label for="birthday">Birthday:</label>
            <input
              className="form-control rounded-0"
              type="date"
              id="birthday"
              name="birthday"
              placeholder="DOB"
              onChange={(e) => { setdob(e.target.value) }}></input>
          </div>


          <button className="btn btn-success w-100 rounded-0">Submit</button>
        </form>
        <p>Already Have an Account?</p>
        <button onClick= {gotoLogin} className="tn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</button>
      </div>
    </div>
  );
}

export default App;
