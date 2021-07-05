const breakpoints = {
	xs: '320px',
	sm: '426px',
	md: '769px',
	lg: '1200px'
};

export default breakpoints;

export const smallScreen = () => `@media (max-width: ${breakpoints.sm})`;
export const mediumScreen = () => `@media screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`;
export const largeScreen = () => `@media (min-width: ${breakpoints.md})`;