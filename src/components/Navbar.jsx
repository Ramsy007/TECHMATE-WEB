
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate  } from "react-router-dom";
import { Base_url } from "../utills/constants";
import { removeUser } from "../utills/userSlice";
import axios from "axios";


const NavBar = () => {
   const dispatch=useDispatch();
   const navigate=useNavigate();
  const user = useSelector((store) => store.user);  // subscribing the store
  const handleLogOut=async()=>{
     try{
        axios.post(Base_url+"/logout",{},{withCredentials:true,}

        )
        dispatch(removeUser());
        navigate("/login");
     }
     catch(err){
        console.log(err);
     }
  }
  


  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          👩‍💻 DevTinder
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <div className="form-control">Welcome, {user.firstName}</div>
          <div className="dropdown dropdown-end mx-5 flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              
             
              <li>
                {/* <Link to="/">logout</Link> */}
                <a onClick={handleLogOut}>logout</a>
                {/* <a onClick={()=>handleLogOut()}>logout</a> this line also work */}
                <Link to="/connection">connections</Link>
                <Link to="/profile">profile</Link>
                <Link to="/requests">requests</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
