//@ts-nocheck
import React from 'react';
import { useAsync } from 'react-async';

import { fetchData } from 'services/fetcher';

const ReactAsync: React.FC = () => {
  const { data: repositories, error, isPending } = useAsync({
    promiseFn: fetchData,
  });

  if (error) return `Something went wrong: ${error.message}`;
  if (isPending) return <div>loading...</div>;

  return repositories.map((repository) => (
    <div key={repository.id}>{repository.name}</div>
  ));
};

export default ReactAsync;
