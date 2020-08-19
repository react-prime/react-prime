//@ts-nocheck
import React from 'react';
import { useAsync } from 'react-async';

import { endpoint, fetcher } from 'services/fetcher';

const fetchData = async () => await fetcher(endpoint);

const ReactAsync: React.FC = () => {
  const { data: repositories, error, isPending } = useAsync({ promiseFn: fetchData });

  if (error) return `Something went wrong: ${error.message}`;
  if (isPending) return <div>loading...</div>;

  return (
    <div>
      <h1>React Async</h1>
      {repositories.map((repository) => (
        <div key={repository.id}>{repository.name}</div>
      ))}
    </div>
  );
};

export default ReactAsync;
