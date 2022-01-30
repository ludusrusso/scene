import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";
import { useEpisode } from "../components/episode-provider";
import { Footer } from "../components/footer";

const Main = styled.div``;

const Scene = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr auto;
`;

export default function TalkScene() {
  const { episode } = useEpisode();

  return (
    <Scene className="bg-gray-300">
      <Main></Main>
      <Footer episode={episode} />
    </Scene>
  );
}
