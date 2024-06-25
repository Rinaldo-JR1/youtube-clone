import VideoInfo from "./VideoInfo";
import VideoOptions from "./VideoOptions";
import VideoTitle from "./VideoTitle";

/* eslint-disable @next/next/no-img-element */
const Player = () => {
  return (
    <div>
      <div>
        <img src="/assets/thumb.png" alt="video" />
      </div>
      <VideoTitle />
      <VideoOptions />
      <VideoInfo />
    </div>
  );
};

export default Player;
