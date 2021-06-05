import { createMedia } from '@artsy/fresnel';

const SworldMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1680,
    xxl: 1920,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = SworldMedia.createMediaStyle();

export const { Media, MediaContextProvider } = SworldMedia;
