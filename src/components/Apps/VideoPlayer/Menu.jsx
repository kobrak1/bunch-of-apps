const Menu = ({ onSelectVideo, videoValues, videos }) => {
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

  export default Menu