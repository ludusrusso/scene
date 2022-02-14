import { useSubscription } from "@apollo/client";
import styled from "@emotion/styled";
import { Fragment, useState } from "react";
import { useChatSubscription } from "../gql";

export interface ChatMessage {
  msg: string;
  author: string;
}

const MAX_CHAT_SIZE = 5;

interface ChatProps {
  twitchChannel: string;
  onClicked: (msg: ChatMessage) => void;
}

const ChatBase = ({ twitchChannel, onClicked }: ChatProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useChatSubscription({
    variables: {
      channel: twitchChannel,
    },
    onSubscriptionData: (data) => {
      const m = data.subscriptionData.data.twitchChat;
      const newMsg: ChatMessage = {
        author: m.author,
        msg: m.msg,
      };
      setMessages((msgs) => {
        if (msgs.length >= MAX_CHAT_SIZE) {
          msgs = msgs.slice(msgs.length - MAX_CHAT_SIZE + 1);
        }
        return [...msgs, newMsg];
      });
    },
  });

  return (
    <Fragment>
      <ChatList className="h-full overflow-hidden">
        {messages.map((msg, idx) => (
          <li key={idx} onClick={() => onClicked(msg)}>
            <span className="author text-gray-100">{msg.author}</span>
            <span className="msg text-gray-400">{msg.msg}</span>
          </li>
        ))}
      </ChatList>
    </Fragment>
  );
};

const ChatList = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    color: white;
    font-size: 12pt;
    .author {
      font-weight: bold;
      margin-right: 10px;
      width: 200px;
      text-align: right;
    }
    .msg {
      width: 300px;
    }
  }
  li + li {
    margin-top: 5px;
  }
`;

const Chat = (props: ChatProps) => {
  return <ChatBase {...props} />;
};

export default Chat;
