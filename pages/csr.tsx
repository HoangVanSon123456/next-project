"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
type Props = {};

export default function CSR({}: Props) {
  const [person, setPerson] = useState<any[]>([]);

  async function getData() {
    const res = await fetch(
      "https://651cd84f35bd4107e3732c0b.mockapi.io/person"
    );
    const data = await res.json();
    setPerson(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {person.map((e) => (
        <h2 key={e.id}>{e.person}</h2>
      ))}
    </>
  );
}
