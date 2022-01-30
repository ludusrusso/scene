import { useEffect, useRef } from "react";
import { EpisodeProvider } from "../components/episode-provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const ref = useRef<HTMLAudioElement>();
  useEffect(() => {
    if (ref.current) {
      ref?.current?.play();
    }
  }, [ref]);

  return (
    <EpisodeProvider>
      <audio ref={ref} loop src="/audio.wav" />
      <Component {...pageProps} />
    </EpisodeProvider>
  );
}

export default MyApp;
