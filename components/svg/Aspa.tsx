import { SVGProps } from 'react';

export default function Aspa(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={15}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.434.107 7.778 5.764 2.12.107.663 1.566l5.656 5.656L.663 12.88l1.458 1.458 5.657-5.656 5.656 5.656 1.459-1.458-5.657-5.657 5.657-5.656L13.434.107Z"
        fill="#F3F243"
      />
    </svg>
  );
}
