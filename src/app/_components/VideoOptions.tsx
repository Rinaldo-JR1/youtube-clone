/* eslint-disable @next/next/no-img-element */

import {
  AiOutlineDislike,
  AiOutlineDownload,
  AiOutlineLike,
} from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";

const VideoOptions = () => {
  return (
    <div className="flex gap-12 mt-4">
      <div className="flex gap-2">
        <div>
          <img src="/assets/avatar.png" alt="avatar" />
        </div>
        <div>
          <p className="font-bold">DIO</p>
          <p className="text-sm text-gray-400">83,3 mil inscritos</p>
        </div>
      </div>
      <div>
        <button className="w-48 h-12 bg-red-500 text-white">
          Inscrever-se
        </button>
      </div>
      <div className="">
        <div className="flex justify-between gap-8">
          <div className="flex justify-center align-middle items-center">
            <AiOutlineLike className="h-12" size={25} />
            <p>2 mil</p>
          </div>
          <div className="flex justify-center align-middle items-center">
            <AiOutlineDislike className="h-12" size={25} />
            <p>Não gostei</p>
          </div>
          <div className="flex justify-center align-middle items-center">
            <CiShare2 className="h-12" size={25} />
            <p>Compartilhar</p>
          </div>
          <div className="flex justify-center align-middle items-center">
            <AiOutlineDownload className="h-12" size={25} />
            <p>Download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoOptions;
