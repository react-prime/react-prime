export const port = process.env.PORT || 3000;

export const isClient = typeof window === 'object';
export const isServer = typeof window === 'undefined';
