import styled from "@emotion/styled";

const Footer = styled.footer`
  height: 100px;
  background-color: blue;
  color: white;
  padding: 20px;
  font-size: 20pt;
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  background-color: red;
`;

const Scene = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 100px;
`;

export default function Home() {
  return (
    <Scene>
      <Main />
      <Footer> @ludusrusso + giuseppe</Footer>
    </Scene>
  );
}
