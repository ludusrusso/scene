const url = "https://www.ludusrusso.dev/api/next-episode";
export const getNextEpisode = async (): Promise<Episode> => {
  const res = await fetch(url);
  return res.json();
};

export interface Participant {
  id: string;
  name: string;
  email: string;
  github: string;
  bio: string;
  avatar?: any;
  twitter: string;
  linkedin: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Guest {
  id: number;
  episodeId: string;
  guestId: string;
  guest: Participant;
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  body: string;
  resources?: any;
  image?: any;
  hostId: string;
  youtube?: any;
  twitch: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  scheduledTime: Date;
  host: Participant;
  guests: Guest[];
}
