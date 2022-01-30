import { createContext, FC, useContext, useEffect, useState } from "react";
import { Episode, getNextEpisode } from "../utils/getNextEpisode";

const Context = createContext<{ episode: Episode | null }>(undefined);

export const useEpisode = () => useContext(Context);

export const EpisodeProvider: FC = ({ children }) => {
  const [episode, setEpisode] = useState<Episode | undefined | null>(null);

  useEffect(() => {
    const call = async () => {
      const episode = await getNextEpisode();
      setEpisode(episode);
    };
    call();
  }, []);

  if (episode === undefined) {
    return (
      <div className="w-screen h-screen bg-slate-900 grid place-content-center">
        <WaitIcon />
      </div>
    );
  }
  return <Context.Provider value={{ episode }}>{children}</Context.Provider>;
};

const WaitIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-52 w-52 text-stone-600 animate-spin"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);
