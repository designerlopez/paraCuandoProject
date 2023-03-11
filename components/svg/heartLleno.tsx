export default function HeartFull(props) {
  return (
    <svg
      width={49}
      height={49}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={24.5}
        cy={24.5}
        r={23.5}
        fill="#FF64BC"
        stroke="#fff"
        strokeWidth={2}
      />
      <path
        d="M18.15 14C14.201 14 11 17.157 11 21.05 11 28.1 19.45 34.51 24 36c4.55-1.49 13-7.9 13-14.95 0-3.893-3.201-7.05-7.15-7.05A7.171 7.171 0 0 0 24 16.996a7.111 7.111 0 0 0-2.553-2.203A7.223 7.223 0 0 0 18.15 14Z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
