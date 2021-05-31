const ServiceGlow = ({ ...props }) => {
  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
          <circle cx="2187.5" cy="1282.5" r="561.5" fill="#A6DBF7" />
        </g>
        <g opacity="0.3" filter="url(#filter1_f)">
          <circle cx="96.5" cy="1405.5" r="561.5" fill="#A6DBF7" />
        </g>
        <g opacity="0.3" filter="url(#filter2_f)">
          <circle cx="590.5" cy="-455.5" r="561.5" fill="#A6DBF7" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="1326"
          y="421"
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
          x="-765"
          y="544"
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
          id="filter2_f"
          x="-271"
          y="-1317"
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

export default ServiceGlow;
