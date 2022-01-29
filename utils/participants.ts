import { Participant } from "./getNextEpisode";

export const getParticipantImage = (
  participant: Pick<Participant, "github" | "avatar">,
  size: number = 500
) => {
  if (!participant.avatar) {
    return `https://avatars.githubusercontent.com/${participant.github}?s=${size}`;
  }
  return participant.avatar;
};
