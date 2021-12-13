export interface Person {
  name: string;
  image: string;
}

export interface Event {
  name: JSX.Element;
  host: Person;
  guest?: Person;
  startTime: Date;
  stream: string;
}

export const event: Event = {
  name: (
    <span>
      <strong>Twitch</strong> fatto in casa per dev tirchi!
    </span>
  ),
  stream: "livefun.dev",
  host: {
    name: "Ludovico Russo",
    image: "/profile.jpeg",
  },
  guest: {
    name: "Giuseppe Funicello",
    image: "/giuppi.jpg",
  },
  startTime: new Date("2021-12-13 17:30"),
};
