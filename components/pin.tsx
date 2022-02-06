import { ApolloProvider, useSubscription } from "@apollo/client";
import styled from "@emotion/styled";
import gql from "graphql-tag";
import { useState } from "react";
import { newApolloClientWithWs } from "../apollo";

const COMMAND = gql`
  subscription Commands {
    commands {
      __typename
      ... on PinMessage {
        msg
        author
      }
    }
  }
`;

interface Message {
  msg: string;
  author: string;
}

const PinnedMessage = () => {
  const [message, setMessage] = useState<Message | undefined>();
  useSubscription(COMMAND, {
    onSubscriptionData: (data) => {
      const cmd = data.subscriptionData.data.commands;
      if (cmd.__typename === "PinMessage") {
        setMessage({
          author: cmd.author,
          msg: cmd.msg,
        });
      } else {
        setMessage(undefined);
      }
    },
  });
  if (!message) {
    return null;
  }
  return (
    <PinnedMessageStyled>
      <h2 className="font-bold text-white text-2xl">{message.msg}</h2>
      <p>{message.author}</p>
    </PinnedMessageStyled>
  );
};

const PinnedMessageStyled = styled.footer`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: red;
  padding: 10px;
`;

const client = newApolloClientWithWs("http://localhost:8080/query");
export default function PinMessage() {
  return (
    <ApolloProvider client={client}>
      <PinnedMessage />
    </ApolloProvider>
  );
}
