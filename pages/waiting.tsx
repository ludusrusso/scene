import styled from "@emotion/styled";
import Image from "next/image";

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
        </ImageCnt>
        <h2 className="text-gray-200 text-8xl">@ludusrusso</h2>
        <p className="text-gray-500 mt-4 text-6xl">
          Backend ticket generation con <strong>Blitzjs</strong>
        </p>
        <p className="text-gray-400 mt-4 text-3xl">
          con <strong>Giuseppe Funicello</strong>{" "}
        </p>
      </div>
    </Scene>
  );
}
