//@ts-nocheck
import React from 'react';
import { endpoint, fetcher } from 'services/fetcher';

import { useQuery } from '../../../../node_modules/react-query/dist/react-query.production.min.js';

const fetchData = async () => await fetcher(endpoint);

const ReactQuery: React.FC = () => {
  const { isLoading, error, data: repositories } = useQuery({ queryKey: 'repoData', queryFn: fetchData });

  if (error) return `Something went wrong: ${error.message}`;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>ReactQuery</h1>
      {repositories.map((repository) => (
        <div key={repository.id}>{repository.name}</div>
      ))}
    </div>
  );
};

export default ReactQuery;
