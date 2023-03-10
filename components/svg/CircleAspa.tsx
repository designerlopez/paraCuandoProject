import { SVGProps } from 'react';

export default function CircleAspa(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={31}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m21.434 8.107-5.656 5.657-5.657-5.657-1.458 1.459 5.656 5.656-5.656 5.657 1.458 1.458 5.657-5.656 5.656 5.656 1.459-1.458-5.657-5.657 5.657-5.656-1.459-1.459Z"
        fill="#F3F243"
      />
      <path
        d="M26.438 4.562A15.469 15.469 0 1 0 4.562 26.438 15.469 15.469 0 0 0 26.438 4.562ZM15.5 28.906c-7.392 0-13.406-6.014-13.406-13.406S8.108 2.094 15.5 2.094 28.906 8.108 28.906 15.5 22.892 28.906 15.5 28.906Z"
        fill="#F3F243"
      />
    </svg>
  );
}
