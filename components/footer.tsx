import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { event } from "../utils/event";

const Chat = dynamic(() => import("./chat"), {
  ssr: false,
});

export const Footer = () => {
  return (
    <FooterStyled className="bg-gray-900">
      <div>
        <h2 className="text-gray-200 text-4xl">{event.stream}</h2>
        <p className="text-gray-500 mt-4">{event.name}</p>
        {event.guest && (
          <p className="text-gray-400 mt-4 text-xl">
            con <strong>{event.guest.name}</strong>{" "}
          </p>
        )}
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
