const MenuGlow = (props) => {
  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1920"
        height="1080"
      >
        <rect width="1920" height="1080" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <g opacity="0.3" filter="url(#filter0_f)">
          <circle cx="2074.5" cy="850.5" r="561.5" fill="#A6DBF7" />
        </g>
        <g opacity="0.2" filter="url(#filter1_f)">
          <circle cx="1301.5" cy="603.5" r="257.5" fill="#828DF2" />
        </g>
        <g opacity="0.3" filter="url(#filter2_f)">
          <circle cx="-303.5" cy="-21.5" r="561.5" fill="#A6DBF7" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="1213"
          y="-11"
          width="1723"
          height="1723"
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
        <filter
          id="filter1_f"
          x="744"
          y="46"
          width="1115"
          height="1115"
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
        <filter
          id="filter2_f"
          x="-1165"
          y="-883"
          width="1723"
          height="1723"
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
