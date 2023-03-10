import { SVGProps } from 'react';

export default function Lupa(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.854 11.583h-.757l-.268-.28a6.979 6.979 0 0 0 1.282-2.61c.245-.961.291-1.97.136-2.953C12.797 2.844 10.573.53 7.89.177A5.765 5.765 0 0 0 5.089.49c-.9.334-1.717.888-2.39 1.62a6.888 6.888 0 0 0-1.49 2.596A7.333 7.333 0 0 0 .924 7.75c.326 2.917 2.453 5.333 5.117 5.823a5.748 5.748 0 0 0 2.718-.149 6.087 6.087 0 0 0 2.4-1.393l.259.292v.823l4.073 4.427a.956.956 0 0 0 1.428 0 1.169 1.169 0 0 0 0-1.552l-4.064-4.438Zm-5.75 0c-2.386 0-4.312-2.093-4.312-4.687 0-2.594 1.926-4.688 4.312-4.688s4.313 2.094 4.313 4.688-1.927 4.687-4.313 4.687Z"
        fill="#6E6A6C"
      />
    </svg>
  );
}
