export const breakpoints = {
  xs: 320,
  sm: 426,
  md: 769,
  lg: 1200,
};

export default breakpoints;

export const smallScreen = () => `@media (max-width: ${breakpoints.sm}px)`;
export const mediumScreen = () =>
  `@media screen and (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px)`;
export const largeScreen = () => `@media (min-width: ${breakpoints.md}px)`;

export const mobileAndTablet = () => `@media (max-width: ${breakpoints.md}px)`;
