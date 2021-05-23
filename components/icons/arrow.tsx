const Arrow = ({ ...props }) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 42L42 14"
        stroke="url(#paint0_linear)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 14H42V36.75"
        stroke="url(#paint1_linear)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="35.7558"
          y1="11.2718"
          x2="5.97806"
          y2="32.2357"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A6DBF7" />
          <stop offset="1" stopColor="#51BCF9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="36.9265"
          y1="11.7833"
          x2="12.7322"
          y2="28.8165"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A6DBF7" />
          <stop offset="1" stopColor="#51BCF9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Arrow;
