import VideoOptions from "./VideoOptions";

/* eslint-disable @next/next/no-img-element */
const Player = () => {
  return (
    <div>
      <div>
        <img src="/assets/thumb.png" alt="video" />
      </div>
      <div className="text-xl font-bold">
        Semana Front-end | Dia 01: Construindo uma Landing Page no Mundo
        Invertido com HTML e CSS
      </div>
      <VideoOptions />
    </div>
  );
};

export default Player;
