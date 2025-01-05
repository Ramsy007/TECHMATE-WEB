import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Base_url } from "../utills/constants";
import { useEffect } from "react";
import { addUser } from "../utills/userSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const Body = () => {
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const userdata = useSelector((store) => store.user);  // subscribing the store
  const fetchUser=async()=>{
     if(userdata)return;
     try{ const res=await axios.get(Base_url+"/profile/view",{
        withCredentials:true,
      })
      dispatch(addUser(res.data));
    }
      catch(err){
         navigate("/login")
         console.log(err);
      }
  }
  // const fetchUser = async () => {
  //   // if (userdata) return;
  //   try {
  //     const res = await axios.get(Base_url + "/profile/view", {
  //       withCredentials: true,
  //     });
  //     dispatch(addUser(res.data));
  //   } catch (err) {
  //     if (err.status === 401) {
  //       navigate("/login");
  //     }
  //     console.error(err);
  //   }
  // };
  useEffect(()=>{
    fetchUser();
  },[])
 
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;
