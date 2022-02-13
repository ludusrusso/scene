import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import { newApolloClientWithWs } from "../apollo";

const client = newApolloClientWithWs("https://oldg.dev.ludusrusso.space/query");

const ApolloClientProvider: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
