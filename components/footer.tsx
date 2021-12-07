import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("./chat"), {
  ssr: false,
});

export const Footer = () => {
  return (
    <FooterStyled className="bg-gray-900">
      <div>
        <h2 className="text-gray-200 text-4xl">@ludusrusso</h2>
        <p className="text-gray-500 mt-4">
          Fullstack dev con<strong> Next</strong> e <strong>TRPC</strong>
        </p>
        <p className="text-gray-400 mt-4 text-xl">
          con <strong>Giuseppe Funicello</strong>{" "}
        </p>
      </div>
      <Chat />
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  border-top: 10px solid #ccc;
  height: 200px;
  padding: 20px;
  font-size: 20pt;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
