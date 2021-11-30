import { ApolloProvider, useSubscription } from "@apollo/client";
import styled from "@emotion/styled";
import gql from "graphql-tag";
import { Fragment, useEffect, useState } from "react";
import { apolloClient } from "../utils/apollo";

const COMMENTS_SUBSCRIPTION = gql`
  subscription {
    message(channel: "ludusrusso") {
      id
      message
      author {
        username
        roles
      }
    }
  }
`;

interface ChatMessage {
  msg: string;
  author: string;
}

const MAX_CHAT_SIZE = 5;

const ChatBase = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useSubscription(COMMENTS_SUBSCRIPTION, {
    onSubscriptionData: (data) => {
      const newMsg: ChatMessage = {
        author: data.subscriptionData.data.message.author.username,
        msg: data.subscriptionData.data.message.message,
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
          <li key={idx}>
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

const Chat = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ChatBase />
    </ApolloProvider>
  );
};

export default Chat;
