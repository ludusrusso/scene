import { createContext, FC, useContext, useEffect, useState } from "react";
import { Episode, getNextEpisode } from "../utils/getNextEpisode";

const Context = createContext<{ episode: Episode }>(undefined);

export const useEpisode = () => useContext(Context);

export const EpisodeProvider: FC = ({ children }) => {
  const [episode, setEpisode] = useState<Episode>();
  useEffect(() => {
    const call = async () => {
      const episode = await getNextEpisode();
      setEpisode(episode);
    };
    call();
  }, []);
  if (!episode) {
    return <p>loading</p>;
  }
  return <Context.Provider value={{ episode }}>{children}</Context.Provider>;
};
