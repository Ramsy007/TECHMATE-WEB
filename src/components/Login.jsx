import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
import { addUser } from "../utills/userSlice";
import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";
import { Base_url } from "../utills/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState();
  const [isloginform,setisloginform]=useState(true);
  const [firstName,setfirstName]=useState("");
  const [lastName,setlastName]=useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        Base_url + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
       setError("invalid credentials");
      return ("something went wrong")
    }
  };
  const handleSignup = async () => {
    try {
      const res = await axios.post(
        Base_url + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
       setError("invalid credentials");
      return ("something went wrong")
    }
  };

  

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
           Login
          </h2>
          <div>
             
         {!isloginform &&
         (
           <>
          <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">firstName:</span>
              </div>
              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setfirstName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">lastName:</span>
              </div>
              <input
                type="text"
                value={lastName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setlastName(e.target.value)}
              />
              
            </label>
            </>
            )}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID:</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
           
           
            <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-5">
          
            <button
              className="btn btn-primary"
              onClick={isloginform ? handleLogin:handleSignup}
            >
             {isloginform ?"login":"Signup"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setisloginform((value) => !value)}
          >
            {isloginform
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>

          

         
        </div>
      </div>
    </div>
  );
};
export default Login;
