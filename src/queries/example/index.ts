import * as i from 'types';
import { useMutation, useQueryClient, useQuery, UseQueryResult } from 'react-query';

import { fetcher } from 'services';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: i.DataPayload) => await fetcher(
      '/create-user',
      {
        method: 'POST',
        body: JSON.stringify({ data }),
      },
    ),
    {
      onSuccess: ({ data }: { data: i.Data }) => {
        queryClient.invalidateQueries(['user', data.id]);
        queryClient.setQueryData(['user', data.id], data);
      },
    },
  );
};

export const useGetUser = (userId: string): UseQueryResult<i.Data | undefined> => {
  return useQuery(
    ['entry', userId],
    async () => await fetcher(
      '/get-user',
      { method: 'GET' },
      { id: userId },
    ),
    {
      enabled: Boolean(userId),
    },
  );
};
