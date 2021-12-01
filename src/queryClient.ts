import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // 30 seconds
      cacheTime: 1000 * 6 * 10, // 10 minutes
      retry: false,
    },
  },
});

export default queryClient;
