import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import { newApolloClientWithWs } from "../apollo";

const client = newApolloClientWithWs(process.env.NEXT_PUBLIC_OLDG);

const ApolloClientProvider: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
