//@ts-nocheck
import React from 'react';

import { useDispatch, useSelector } from 'hooks';
import { getData } from 'ducks/data';

const Redux: React.FC = () => {
  const dispatch = useDispatch();

  const repositories = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (error) return `Something went wrong: ${error}`;
  if (loading) return <div>loading...</div>;

  return repositories.length
    ? repositories.map((repository) => (
      <div key={repository.id}>{repository.name}</div>
    ))
    : null;
};

export default Redux;
