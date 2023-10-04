import React from "react";

type Props = { person: any[] };

export async function getStaticProps() {
  const res = await fetch("https://651cd84f35bd4107e3732c0b.mockapi.io/person");
  const person = await res.json();

  return {
    props: {
      person, // will be passed to the page component as props
    },
  };
}

export default function StaticSiteGeneration({ person }: Props) {
  return (
    <>
      {person.map((e) => (
        <h2 key={e.id}>{e.person}</h2>
      ))}
    </>
  );
}
