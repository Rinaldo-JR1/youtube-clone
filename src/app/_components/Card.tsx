/* eslint-disable @next/next/no-img-element */

type Props = {
  videoThumb: string;
  title: string;
  channel: string;
  views: string;
  date: string;
};
export const Card = ({ channel, date, title, videoThumb, views }: Props) => {
  return (
    <div className="flex gap-2 w-full ">
      <div>
        <img src={videoThumb} alt="video" />
      </div>
      <div>
        <div>
          <p className="font-bold">{title}</p>
        </div>
        <div className="text-sm text-gray-400">
          <div>
            <p>{channel}</p>
          </div>
          <div>
            <p>{views}</p>
          </div>
          <div>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
