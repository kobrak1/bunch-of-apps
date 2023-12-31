import { useEffect, useState } from "react";
import Video from "./Video";
import Menu from "./Menu";
import "./VideoPlayer.scss";

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState("");

  const videos = {
    dog: "Ynlbj6fDzSc",
    elephant: "8sSVszVR8uE",
    duck: "JDN0JjQKaHI",
    racoon: "https://www.youtube.com/watch?v=QHrIruS0WzM",
    donkey: "MIQKlHSD89E",
  };

  // extract the keys from videos object
  const videoNames = Object.keys(videos);

  // function to update the videoSrc state
  const onSelectVideo = (e) => {
    setVideoSrc(e);
  };

  // update the state and force re-render when videoSrc changes
  useEffect(() => {}, [videoSrc]);

  return (
    <div className="video-player">
      <div className="title">
        <h1>Video Player</h1>
        <Menu videoValues={videoNames} onSelectVideo={onSelectVideo} videos={videos} />
      </div>
      <Video videoId={videoSrc} />
    </div>
  );
};

export default VideoPlayer;
