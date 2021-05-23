const MenuGlow = ({ position, ...props }) => {
  return (
    <svg
      width="578"
      height="1587"
      viewBox="0 0 578 1587"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.2" filter="url(#filter0_f)">
        <circle cx="-215.5" cy="793.5" r="493.5" fill="#828DF2" />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-1009"
          y="0"
          width="1587"
          height="1587"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};

export default MenuGlow;
