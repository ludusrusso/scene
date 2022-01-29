import { EpisodeProvider } from "../components/episode-provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <EpisodeProvider>
      <Component {...pageProps} />
    </EpisodeProvider>
  );
}

export default MyApp;
