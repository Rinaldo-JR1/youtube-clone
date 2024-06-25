import { BiVideo } from "react-icons/bi";
import { TfiMenu, TfiSearch, TfiBell } from "react-icons/tfi";

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  return (
    <header>
      <div className="w-full h-24 flex justify-between">
        <div className="flex justify-center text-center gap-4">
          <div>
            <TfiMenu />
          </div>
          <div>
            <img src="/assets/youtube.png" alt="logo" className="w-full" />
          </div>
        </div>
        <div className="w-96 h-10 border flex justify-end items-center">
          <input className="w-full h-full" />
          <div className="w-16 flex justify-center h-full bg-gray-200 border-2 border-gray-400">
            <button>
              {/* <img src="/assets/search.png" alt="search" /> */}
              <TfiSearch />
            </button>
          </div>
        </div>
        <div className="flex justify-center align-middle  gap-4">
          <BiVideo className="h-12" size={30}  />
          <TfiBell className="h-12"  size={30}/>
          <img
            src="/assets/eu.png"
            alt="eu"
            className="h-12 rounded-full text-center"
          />
        </div>
      </div>
    </header>
  );
};
