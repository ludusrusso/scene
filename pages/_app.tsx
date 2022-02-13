import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { EpisodeProvider } from "../components/episode-provider";
import "../styles/globals.css";

const ApolloProvider = dynamic(() => import("../components/apollo-provider"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const ref = useRef<HTMLAudioElement>();
  useEffect(() => {
    if (ref.current) {
      ref?.current?.play();
    }
  }, [ref]);

  return (
    <ApolloProvider>
      <EpisodeProvider>
        <audio ref={ref} loop src="/audio.wav" />
        <Component {...pageProps} />
      </EpisodeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
