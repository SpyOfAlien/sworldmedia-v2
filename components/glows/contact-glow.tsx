const ContactGlow = ({ ...props }) => {
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
          <circle cx="1133.5" cy="-359.5" r="475.5" fill="#51BCF9" />
        </g>
        <g opacity="0.2" filter="url(#filter1_f)">
          <circle cx="1270.5" cy="1174.5" r="257.5" fill="#828DF2" />
        </g>
        <g opacity="0.3" filter="url(#filter2_f)">
          <circle cx="27.5" cy="501.5" r="475.5" fill="#51BCF9" />
        </g>
        <g opacity="0.3" filter="url(#filter3_f)">
          <circle cx="1847.5" cy="1367.5" r="475.5" fill="#51BCF9" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="358"
          y="-1135"
          width="1551"
          height="1551"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          x="713"
          y="617"
          width="1115"
          height="1115"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          x="-748"
          y="-274"
          width="1551"
          height="1551"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter3_f"
          x="1072"
          y="592"
          width="1551"
          height="1551"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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

export default ContactGlow;