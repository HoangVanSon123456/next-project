import type { GetServerSideProps } from "next";

type Props = {
  person: any[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch("https://651cd84f35bd4107e3732c0b.mockapi.io/person");
  const person = await res.json();
  return {
    props: {
      person,
    },
  };
};

export default function SSR({ person }: Props) {
  return (
    <>
      {person.map((e) => (
        <h2 key={e.id}>{e.person}</h2>
      ))}
    </>
  );
}
