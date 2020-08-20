//@ts-nocheck
import React from 'react';
import { fetchData } from 'services/fetcher';

import { useQuery } from '../../../../node_modules/react-query/dist/react-query.production.min.js';

const ReactQuery: React.FC = () => {
  const { isLoading, error, data: repositories } = useQuery({
    queryKey: 'repoData',
    queryFn: fetchData,
  });

  if (error) return `Something went wrong: ${error.message}`;
  if (isLoading) return <div>loading...</div>;

  return repositories.map((repository) => (
    <div key={repository.id}>{repository.name}</div>
  ));
};

export default ReactQuery;
