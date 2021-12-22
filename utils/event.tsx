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
      Creare un form complesso per Hackability con{" "}
      <strong>react final-form</strong>
    </span>
  ),
  stream: "Hackability dev",
  host: {
    name: "Ludovico Russo",
    image: "/profile.jpeg",
  },
  guest: {
    name: "Gerson Enriquez",
    image: "/gerson.jpg",
  },
  // guest2: {
  //   name: "Francesco d'Alia",
  //   image: "/francesco.jpg",
  // },
  startTime: new Date("2021-12-22 18:00"),
};
