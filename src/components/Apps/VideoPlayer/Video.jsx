import YouTube from "react-youtube";

const Video = ({ videoId }) => {
  return (
    <div className="display-video" style={{borderRadius:"1rem"}}>
    <YouTube videoId={videoId} opts={{ width: "640", height: "360" }} />
  </div>
  )
}

export default Video
