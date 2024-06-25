/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  return (
    <header>
      <div className="w-full h-24 flex justify-between">
        <div className="flex justify-center text-center gap-4">
          <div>
            <img src="/assets/menu.png" alt="menu" className="w-full" />
          </div>
          <div>
            <img src="/assets/youtube.png" alt="logo" className="w-full" />
          </div>
        </div>
        <div className="w-96 h-10 border flex justify-end items-center">
          <input className="w-full h-full" />
          <div className="w-16 flex justify-center h-full bg-gray-200 border-2 border-gray-400">
            <button>
              <img src="/assets/search.png" alt="search" />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <img src="/assets/video.png" alt="video" className="h-12" />
          <img src="/assets/bell.png" alt="bell" className="h-12" />
          <img src="/assets/eu.png" alt="eu" className="h-12 rounded-full text-center" />
        </div>
      </div>
    </header>
  );
};
