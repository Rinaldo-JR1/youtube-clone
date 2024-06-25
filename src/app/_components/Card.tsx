/* eslint-disable @next/next/no-img-element */

export const Card = () => {
  return (
    <div className="flex gap-2 w-full ">
      <div>
        <img src="/assets/thumb1.png" alt="video" />
      </div>
      <div className=" ">
        <div>
          <p className="font-bold">
            Geração Tech Unimed - BH - Ciência de Dados
          </p>
        </div>
        <div className="text-sm text-gray-400">
          <div>
            <p>DigitalInnovationOne</p>
          </div>
          <div>
            <p>2,1 mil visualizações</p>
          </div>
          <div>
            <p>Transmitido há 2 dias</p>
          </div>
        </div>
      </div>
    </div>
  );
};
