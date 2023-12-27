type Breakpoints = {
  xss: string;
  xs: string;
  sm: string;
  md: string;
  mmd: string;
  xmd: string;
  lg: string;
  xl: string;
  xxl: string;
};

const breakpoints: Breakpoints = {
  xss: '390px',
  xs: '400px',
  sm: '540px',
  md: '768px',
  mmd: '840px',
  xmd: '980px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  mmd: `(max-width: ${breakpoints.mmd})`,
  xmd: `(max-width: ${breakpoints.xmd})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
};
