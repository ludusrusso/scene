import styled from "@emotion/styled";
import React from "react";
import { Footer } from "../components/footer";

const Main = styled.div``;

const Scene = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr auto;
`;

export default function Home() {
  return (
    <Scene>
      <Main></Main>
      <Footer />
    </Scene>
  );
}
