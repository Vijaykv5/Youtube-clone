import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import { togglemenu } from '../utils/appSlice';

const Videocontainer = () => {

  const [videos,setVideos]=useState([])
  useEffect(()=>{
    getVideos();
  },[])

  const getVideos =async()=>{
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    
    setVideos(json.items)
  }
  return (
    <>
    {/* {console.log(togglemenu.state.isMenuOpen())} */}
    <div className=' grid grid-cols-3   '>
    {videos.map(video=> <Link to={'/watch?v='+video.id}> <Videocard key="video.id"info={video}/></Link>)}
    </div>
    </>
  )
}

export default Videocontainer