import * as i from 'types';
import { css } from 'styled-components';

export const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
} as const;

export const media = Object.keys(sizes).reduce((accumulator, _label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const label = _label as i.MediaSizes;
  const emSize = sizes[label] / 16;

  // @ts-ignore
  accumulator[label] = (...args: Parameters<typeof css>) => css` @media (min-width: ${emSize}em) { ${css(...args)}; } `;

  return accumulator;
}, {} as i.MediaUtils);
