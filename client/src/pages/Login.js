
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // async function loginUser(event) {
  //   event.preventDefault()
  //   console.log(email)
  //   const response = await fetch('http://localhost:1337/api/login', {

  //     method: "POST",
  //     headers: {
  //       "Content-Type": 'application/json'
  //     },
  //     body: JSON.stringify({

  //       email,
  //       password,
  //     }),
  //   })

  //   const data = await response.json()

  //   if(data.user) {
  //     alert("Login Successfull")
  //     // window.location.href="/dashboard"
  //   }
  //   else {
  //     alert("please check username and password")
  //   }
  //   console.log(data)
  // }

  async function loginUser(event) {
    event.preventDefault();

    await axios.post('http://localhost:1337/api/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data.status === "ok") {
          console.log("Login Success");
          alert('Login successful!')
          navigate('/home');
        }
        else {
          alert('Incorrect password! Please try again.');
        }
      })
      .catch(err => console.log(err));
    // console.log(response);
    // const data = await response.json()

    // if(data.user) {
    //   alert("Login Successfull")
    //   // window.location.href="/dashboard"
    // }
    // else {
    //   alert("please check username and password")
    // }
  }


  return (
    <div style= {{backgroundImage : "linear-gradient(rgb(0, 102, 102),rgb(0, 255, 153))"}} className=" rounded d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25 shadow-lg p-3 mb-5 bg-green">
        <h1 className="border-0">Login</h1>
        <form onSubmit={loginUser} className="row row-cols-lg-auto g-3 align-items-center">


          <input
            className="form-control rounded-0"
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br />
          <input
            className="form-control rounded-0"
            type='password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder='Password' />
          <br />
          <div class="col-12">
            <div class="form-check">
              <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
              <label className="form-check-label" for="inlineFormCheck">
                Remember me
              </label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              
              <div className="form-check-label" for="inlineFormCheck">
                <p>Forget your password?</p>
              </div>

            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success w-100 rounded-0">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
