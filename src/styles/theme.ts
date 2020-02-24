import 'styled-components';

const theme = {
  colors: {
    prime: '#e7ff00',
    black: Object.assign('#000000', { test: '#0001' }),
  },
} as const;

export default theme;
