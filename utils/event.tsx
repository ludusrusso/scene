export interface Person {
  name: string;
  image: string;
}

export interface Event {
  name: JSX.Element;
  host: Person;
  guest?: Person;
  guest2?: Person;
  startTime: Date;
  stream: string;
}

export const event: Event = {
  name: (
    <span>
      Implementiamo uno <strong>Smart Contract</strong> per generare{" "}
      <strong>NFT</strong>
    </span>
  ),
  stream: "LiveFun",
  host: {
    name: "Ludovico Russo",
    image: "/profile.jpeg",
  },
  guest: {
    name: "Giuseppe Funicello",
    image: "/giuppi.jpg",
  },
  guest2: {
    name: "Francesco d'Alia",
    image: "/francesco.jpg",
  },
  startTime: new Date("2021-12-21 17:30"),
};
