//@ts-nocheck
export const endpoint = 'https://api.github.com/users/react-prime/repos';

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const fetchData = async () => await fetcher(endpoint);
