import { Card } from "./_components/Card";
import { Navbar } from "./_components/Navbar";
import Player from "./_components/Player";

export default function Home() {
  return (
    <main className="p-4">
      <Navbar />
      <div className="flex justify-center ">
        <div className="w-4/6">
          <Player />
        </div>
        <div className="space-y-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
