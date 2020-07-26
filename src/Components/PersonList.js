import React from "react";
import Person from "./Person";

const PersonList = () => {
  const people = [
    {
      img: 11,
      name: "Ahmed",
      job: "developer",
    },
    {
      img: 13,
      name: "Kazim",
      job: "Engineer",
    },
    {
      img: 12,
      name: "izhan",
      job: "Designer",
    },
    {
      img: 14,
      name: "Qasim",
      job: "Banker",
    },
  ];
  debugger;
  return (
    <div>
      {/* {people.map((i, j) => (
        <Person person={people[i]} key={j} />
      ))} */}
      <Person person={people[0]} />
      <Person person={people[1]}>I'm a proud son of Ahmed</Person>
      <Person person={people[2]} />
      <Person person={people[3]} />
    </div>
  );
};

export default PersonList;
