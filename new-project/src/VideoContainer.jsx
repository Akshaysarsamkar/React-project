import React, { useState } from "react";
import Player from "./Player";
import VideoList from "./VideoList";

import JSON from "./video.json"; // Importing json data

const VideoContainer = () => {
  let [videoData, setVideoData] = useState(JSON); // STORING JSON DATA INSIDE STATE VARIABLE

  let [videotitle, setvideoTitle] = useState("Big Buck Bunny");

  let [videoUrl, setVideoUrl] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );

  return (
    <>
      <section id="mainContainer">
        <aside className="leftContainer">
          <Player data={{videotitle,videoUrl}}/>
        </aside>
        <aside className="rightContainer">
          {videoData.map((val) => {
            return <VideoList key={val.id} data={val} update={{setvideoTitle,setVideoUrl}}/>;
          })}
        </aside>
      </section>
    </>
  );
};

export default VideoContainer;
