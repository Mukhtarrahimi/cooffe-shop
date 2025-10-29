import PageHeader from '@/components/modules/PageHeader/PageHeader';
import React from 'react';

function Search() {
  return (
    <>
      <PageHeader route="Search" />
    </>
  );
}
export async function getServerSiteProps(context) {
  const { query } = context;
  const result = await fetch('http://localhost:4000/menu');
  const data = await result.json();
  const resultSearh = data.filter(
    (item) =>
      item.type.toLowerCasse().includes(query.q.toLowerCasse()) ||
      item.title.toLowerCasse().includes(query.q.toLowerCasse())
  );
  return {
    props: {
      data: resultSearh,
    },
  };
}

export default Search;
