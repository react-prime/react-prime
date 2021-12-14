export type Data = {
  id: string;
  name: string;
};

export type DataPayload = Omit<Data, 'id'>;
