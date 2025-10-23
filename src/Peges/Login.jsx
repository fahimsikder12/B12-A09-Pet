import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useRef } from "react";
import { useState } from "react";

function Login() {
  const { creatLoginuser, googleLogin } = useContext(AuthContext);

  const emailref = useRef();
  const [showPass, setShowpass] = useState(false);
  const navigat = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleLoginuser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;

    creatLoginuser(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        Swal.fire({
          title: "Success!",
          text: "User has been lodedin successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigat(location?.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert("please valid password", errorCode);
      });
  };

  const handleForgetpass = () => {
    const emaill = emailref.current.value;

    sendPasswordResetEmail(auth, emaill)
      .then(() => {
        // Password reset email sent!
        alert("we send a email for forget your password");
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        // ..
      });
  };

  // googleLogin

  const handlegoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "User has been google logedin successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigat(location?.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert("google-login", errorCode);
      });
  };

  return (
    <div className="card   p-2 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-12 bg-gray-300">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLoginuser} className="fieldset  ">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            ref={emailref}
          />
          <div className="relative">
            <label className="label">Password</label>
            <input
              type={showPass ? "text" : "password"}
              className="input"
              placeholder="Password"
              name="password"
            />
          </div>
          <Link to="/forgetpass" onClick={handleForgetpass}>
            Forgot password?
          </Link>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>
        <button
          onClick={() => setShowpass(!showPass)}
          className="absolute right-12 bottom-[203px]  mt-[15px]"
        >
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </button>
        <p>
          New to this site Please ?{" "}
          <Link className="text-blue-400 font-semibold" to="/register">
            Register
          </Link>
        </p>
      </div>
      {/* Google */}
      <button
        onClick={handlegoogle}
        className="btn bg-white text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
}

export default Login;
