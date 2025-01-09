

import { useDispatch } from "react-redux";
import { Base_url } from "../utills/constants";
import { removeUserFromFeed } from "../utills/feedSlice";
import axios from "axios";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch=useDispatch();
  const handleSendRequest=async(status,userid)=>{
      try{const res=await axios.post(Base_url+"/request/send/"+status+"/"+userid,{},{withCredentials:true});
      dispatch(removeUserFromFeed(userid));}

  
  catch(err){
      console.log(err);
  }

}

  


  

  
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
           
          onClick={()=>handleSendRequest("ignored",_id)}>
            Ignore
          </button>
          <button
            className="btn btn-secondary"
           
          onClick={()=>handleSendRequest("interested",_id)}>
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
