import React, { useEffect } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux';
import { Base_url } from '../utills/constants';
import axios from 'axios'
import { addFeed } from '../utills/feedSlice';

const Feed = () => {
   const dispatch=useDispatch();
   const feed=useSelector((store)=>store.feed)

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(Base_url + "/feed", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addFeed(res?.data?.data));
     
    } catch (err) {
       console.log(err.message)
    }
  };
 useEffect(()=>{
  getFeed();
  console.log("hiiii");
 },[])
  return (
    <div>
    {feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} />
        {/* <h1>hii</h1> */}
      </div>
    )}
    </div>
  )
}

export default Feed