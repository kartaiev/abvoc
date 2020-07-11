import React from "react";
import Basic from "../components/Basic";
import SearchCreate from "../components/SearchCreate";
import { useQuery } from "@apollo/client";
import { GET_DECKS } from "../queries";

const Home = () => {
  const { loading, data } = useQuery(GET_DECKS);

  const decks =
    !loading &&
    data.decks.map((deck, i) => {
      return <Basic key={i} title={deck.title} />;
    });

  return (
    <>
      <Basic title="Abvoc" />
      <SearchCreate />
      {decks}
    </>
  );
};

export default Home;
