import type { GetStaticProps } from "next";

type Props = {
  person: any[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("https://651cd84f35bd4107e3732c0b.mockapi.io/person");
  const person = await res.json();
  return {
    props: {
      person,
    },
    revalidate: 10,
  };
};
export default function ISR({ person }: Props) {
  return (
    <>
      {person.map((e) => (
        <h2 key={e.id}>{e.person}</h2>
      ))}
    </>
  );
}
