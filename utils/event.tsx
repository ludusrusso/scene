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
      Frontend design con <strong>Tailwind</strong> e <strong>Emotions</strong>
    </span>
  ),
  stream: "hackability.dev",
  host: {
    name: "Ludovico Russo",
    image: "/profile.jpeg",
  },
  guest: {
    name: "Gerson Enriquez Cruz",
    image: "/gerson.jpg",
  },
  startTime: new Date("2021-15-13 18:00"),
};
