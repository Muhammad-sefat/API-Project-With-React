import { useEffect, useState } from "react";
import Person from "./Person";

export default function Showdata() {
  const [persons, setpersons] = useState([]);
  console.log(persons);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setpersons(data));
  }, []);
  return (
    <>
      <div>
        {persons.map((person) => (
          <Person person={person}></Person>
        ))}
      </div>
    </>
  );
}
