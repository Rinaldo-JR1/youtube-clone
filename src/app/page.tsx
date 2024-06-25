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
          <Card
            channel="Digital Inovation One"
            date="2 dias atrás"
            title="Geração Tech Unimed - BH - Ciência de Dados"
            videoThumb="/assets/thumb1.png"
            views="2,1 mil visualizações"
          />
          <Card
            channel="Digital Inovation One"
            date="Transmitido há 3 dias"
            title="Scrum Talks"
            videoThumb="/assets/thumb2.png"
            views="1,6 mil visualizações"
          />
          <Card
            channel="Machine Learning Avançado - Fast Track"
            date="Transmitido há 4 dias"
            title="Geração Tech Unimed - BH - Ciência de Dados"
            videoThumb="/assets/thumb3.png"
            views="1,7 mil visualizações"
          />
          <Card
            channel="Digital Inovation One"
            date="Transmitido há 5 dias"
            title="Global Skills #2 - Project Planning"
            videoThumb="/assets/thumb4.png"
            views="971 visualizações"
          />
          <Card
            channel="Digital Inovation One"
            date="Transmitido há 6 dias"
            title="Como aprender a programar Python do ZERO"
            videoThumb="/assets/thumb5.png"
            views="711 visualizações"
          />
        </div>
      </div>
    </main>
  );
}
