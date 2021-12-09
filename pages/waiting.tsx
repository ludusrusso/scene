import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";

const Scene = styled.div`
  height: 100vh;
  grid-template-rows: 1fr 100px;
  img {
    border-radius: 1000px;
  }
`;

const ImageCnt = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Home() {
  const [startTime] = useState(new Date("2021-12-09 18:00"));
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <Scene className="bg-gray-800 relative p-[100px]">
      <div className="h-full grid content-center">
        <ImageCnt className="flex gap-10">
          <div>
            <Image width="200" height="200" src="/profile.jpeg"></Image>
          </div>
          <div>
            <Image
              width="200"
              height="200"
              className="-pl-4"
              src="/gerson.jpg"
            ></Image>
          </div>
          <div className="flex-grow">
            <span className="text-gray-200 text-[130px] w-[200px] font-bold ml-20">
              {getWaitTime(startTime, time)}
            </span>
          </div>
        </ImageCnt>
        <h2 className="text-gray-200 text-8xl">@ludusrusso</h2>
        <p className="text-gray-500 mt-4 text-6xl">
          Migriamo su<strong> Blitz.js</strong>
        </p>
        <p className="text-gray-400 mt-4 text-3xl">
          con <strong>Gerson Enriquez Cruz</strong>{" "}
        </p>
      </div>
    </Scene>
  );
}

const padString = (d: string | number) => {
  return `00${d}`.slice(-2);
};

const getWaitTime = (startTime: Date, time: Date) => {
  const seconds = Math.trunc((startTime.getTime() - time.getTime()) / 1000);
  if (seconds < 0) {
    return <> Arriviamo</>;
  }
  const secs = seconds % 60;
  const mins = Math.trunc(seconds / 60) % 60;
  const hours = Math.trunc(seconds / 60 / 60);
  return (
    <>
      {hours > 0 ? padString(hours) + ":" : null}
      {padString(mins)}:{padString(secs)}
    </>
  );
};
