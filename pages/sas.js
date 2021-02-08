import React from "react";

// import { Container } from './styles';

function Sas({ data }) {
  return <div>{JSON.stringify(data)}</div>;
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  return { props: { data: process.env } };
}

export default Sas;
