import React from "react";

const VideoList = (props) => {
  console.log(props.data);

  let { thumbnailUrl, title, videoUrl, views } = props.data;

  let{setvideoTitle,setVideoUrl} = props.update 

  let changeVideoPalyer = ()=>{
    setvideoTitle(title) // changing title of video in player 

    setVideoUrl(videoUrl)
  }
  return (
    <>
      <div className="imgContainer">
        <img src={thumbnailUrl} alt={title} height="200px" width="300px" onClick={changeVideoPalyer}/>
        <h3>{title}</h3>
        <h4>{views}</h4>
      </div>
    </>
  );
};

export default VideoList;
