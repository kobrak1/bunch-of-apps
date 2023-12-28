import { useState } from "react";
import "./VideoPlayer.scss";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState("");

  const videos = {
    dog: "Ynlbj6fDzSc",
    elephant: "8sSVszVR8uE",
    duck: "JDN0JjQKaHI",
    racoon: "M36e52Q5ghQ",
    donkey: "MIQKlHSD89E",
  };

  const videoNames = Object.keys(videos);

  const onSelectVideo = (e) => {
    setVideoSrc(e);
  };

  const Video = ({ videoId }) => {
    return (
      <div>
        <YouTube videoId={videoId} opts={{ width: "640", height: "360" }} />
      </div>
    );
  };

  const Menu = ({ onSelectVideo, videoValues }) => {
    return (
      <form className="radio-buttons">
        {videoValues.map((value, i) => (
          <div className="video-inputs" key={i}>
            <input
              type="radio"
              name="src"
              value={value}
              onChange={() => onSelectVideo(videos[value])}
            />
            {value}
          </div>
        ))}
      </form>
    );
  };

  return (
    <div className="video-player">
      <h1>Video Player</h1>
      <Menu videoValues={videoNames} onSelectVideo={onSelectVideo} />
      <Video videoId={videoSrc} />
    </div>
  );
};

export default VideoPlayer;
