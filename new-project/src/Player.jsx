import React, { useRef, useState } from "react";

const Player = (props) => {
  let { videotitle, videoUrl } = props.data;

  let videoRef = useRef();

  let [play, setPlay] = useState(true);

  let controlVideo = () => {
    videoRef.current.autoplay = true;
    if (play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlay(!play);
  };

  let [muteVideo, setMuteVideo] = useState(true);

  let handleMute = () => {
    videoRef.current.muted = muteVideo;
    setMuteVideo(!muteVideo);
  };

  return (
    <>
      <div className="player">
        <h1>VIDEO PLAYER</h1>
        <video
          src={videoUrl}
          height="450px"
          width="450px"
          ref={videoRef}
          onClick={controlVideo}
        ></video>

        <h1>{videotitle}</h1>

        <span onClick={handleMute} style={{ cursor: "pointer" }}>
          {muteVideo ? "MUTE" : "UNMUTE" }
        </span>
      </div>
    </>
  );
};

export default Player;
