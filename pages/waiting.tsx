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
  const [startTime] = useState(new Date("2021-12-01 12:00"));
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  const seconds = Math.trunc((startTime.getTime() - time.getTime()) / 1000);
  const secs = seconds % 60;
  const mins = Math.trunc(seconds / 60);

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
              src="/giuppi.jpg"
            ></Image>
          </div>
          <div className="flex-grow">
            <span className="text-gray-200 text-[130px] w-[200px] font-bold ml-20">
              {mins}:{secs}
            </span>
          </div>
        </ImageCnt>
        <h2 className="text-gray-200 text-8xl">@ludusrusso</h2>
        <p className="text-gray-500 mt-4 text-6xl">
          Fullstack dev con<strong> Next</strong> e <strong>TRPC</strong>
        </p>
        <p className="text-gray-400 mt-4 text-3xl">
          con <strong>Giuseppe Funicello</strong>{" "}
        </p>
      </div>
    </Scene>
  );
}
