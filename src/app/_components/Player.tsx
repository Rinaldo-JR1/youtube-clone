import VideoDescription from "./VideoDescription";
import VideoInfo from "./VideoInfo";
import VideoOptions from "./VideoOptions";
import VideoTitle from "./VideoTitle";

/* eslint-disable @next/next/no-img-element */
const Player = () => {
  return (
    <div>
      <div>
        <img src="/assets/video.png" alt="video" className="w-[85%]" />
      </div>
      <VideoTitle />
      <VideoOptions />
      <VideoInfo />
      <VideoDescription />
    </div>
  );
};

export default Player;
