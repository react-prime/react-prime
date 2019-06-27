import * as i from 'types';
import { css } from 'styled-components';

export const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
} as const;

export const media = (Object.keys(sizes).reduce<Partial<i.MediaUtils>>((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args: i.CssFnParams) => css` @media (min-width: ${emSize}em) { ${css(...args)}; } `;

  return accumulator;
}, {}) as i.MediaUtils);
