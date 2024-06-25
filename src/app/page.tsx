import { Navbar } from "./_components/Navbar";
import Player from "./_components/Player";

export default function Home() {
  return (
    <main className="p-4">
      <Navbar />
      <div className="flex">
        <div className="w-4/5">
          <Player />
        </div>
        <div >
          <div>Cards</div>
          <div>Cards</div>
        </div>
      </div>
    </main>
  );
}
