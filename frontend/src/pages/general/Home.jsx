import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/reels.css";
import ReelFeed from "../../components/ReelFeed";
import { useNavigate } from 'react-router-dom';
import api from '../../api.js';
const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    
  },[])
  // Autoplay behavior is handled inside ReelFeed
    const navigate = useNavigate();
  useEffect(async() => {
    await api
      .get("/api/food")
      .then((response) => {
        console.log(response.data);

        setVideos(response.data.foodItems);
      })
      .catch(() => {
        /* noop: optionally handle error */
      });
  }, []);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    console.log(token);
    if(!token){
        navigate("/register")
    }
  });

  // Using local refs within ReelFeed; keeping map here for dependency parity if needed

  async function likeVideo(item) {
    const response = await api.post(
      "/api/food/like",
      { foodId: item._id }
    );

    if (response.data.like) {
      console.log("Video liked");
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id ? { ...v, likeCount: v.likeCount + 1 } : v,
        ),
      );
    } else {
      console.log("Video unliked");
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id ? { ...v, likeCount: v.likeCount - 1 } : v,
        ),
      );
    }
  }

  async function saveVideo(item) {
    const response = await api.post(
      "/api/food/save",
      { foodId: item._id }
    );

    if (response.data.save) {
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id ? { ...v, savesCount: v.savesCount + 1 } : v,
        ),
      );
    } else {
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id ? { ...v, savesCount: v.savesCount - 1 } : v,
        ),
      );
    }
  }

  return (
    <ReelFeed
      items={videos}
      onLike={likeVideo}
      onSave={saveVideo}
      emptyMessage="No videos available."
    />
  );
};

export default Home;
