import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

function Navbar() {
  const { user, logOutuser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutuser()
      .then((result) => {
        console.log("logout seuccecfully", result);
        alert(" log out succecfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar  shadow-sm bg-[#2C3E50]  text-[#FFFFFF]">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/myProfile" href="">
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutbox" href="">
                  {" "}
                  About Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex ">
            <img
              className="w-[40px] rounded-full"
              src="/public/images/paws.pic"
              alt=""
            />
            <a className="btn btn-ghost text-2xl font-bold">Paws Care</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/myProfile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/aboutbox">About Home</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="pr-3  flex items-center ">
            {user && (
              <>
                <div className="relative group">
                  <div className=" cursor-pointer w-9 mx-2  bg-gray-400 p-[3px] rounded-full flex items-center justify-center ">
                    <img
                      className="rounded-full"
                      src={user.photoURL}
                      alt="User Profile"
                    />
                    <div className="absolute -bottom-12 left-1/2   bg-gray-800 text-white text-sm rounded-lg px-4  opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      {user.displayName}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {user ? (
            <Link onClick={handleLogOut} className="btn btn-primary">
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
      <div className="border-1 border-gray-500"></div>
    </>
  );
}

export default Navbar;
