// import React, { useState } from 'react'
// // import {useHistory} from 'react-router-dom';
// import { useNavigate } from "react-router";




// const Login = (props) => {
//   const [details, setdetails] = useState({ email: "", password: "" })
//   let history = useNavigate();
//   const handleonclick = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:4000/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email: details.email, password: details.password }),// this is like the body in thunder client

//     });
//     const json = await response.json();
//     console.log(json);
//     console.log(json.success);
//     if (json.success) {
//       localStorage.setItem('token', json.jwtdata);

//       history("/Streamlitapp");
//       //  props.showalert("Account logined ","success:")
//       console.log("working")
//       props.showalert("Account logined  ", "success : ")



//     }
//     else {
//       props.showalert("Invalid details ", "danger : ")

//     }

//   }

//   const onchange = (e) => {
//     setdetails({ ...details, [e.target.name]: e.target.value })

//   }
//   return (
//     <div>
//       <form onSubmit={handleonclick}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="email" name='email' value={details.email} onChange={onchange} aria-describedby="emailHelp" />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" name="password" value={details.password} onChange={onchange} id="password" />
//         </div>

//         <button type="submit" className="btn btn-primary" >Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { useNavigate } from "react-router";
import './Login.css';

const Login = (props) => {
  const [details, setdetails] = useState({ email: "", password: "" });
  let history = useNavigate();

  const handleonclick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: details.email, password: details.password }),
    });
    const json = await response.json();
    console.log(json);
    console.log(json.success);
    if (json.success) {
      localStorage.setItem('token', json.jwtdata);
      localStorage.setItem('dinesh', 16);
      history("/Hhome");
      console.log("working");
      props.showalert("Account logged in", "success");
    } else {
      props.showalert("Invalid details", "danger");
    }
  };

  const onchange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleonclick}>
        <h1 className="login-title">Login</h1>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={details.email}
            onChange={onchange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            name="password"
            value={details.password}
            onChange={onchange}
            id="password"
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
}

export default Login;
