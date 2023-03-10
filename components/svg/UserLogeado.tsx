import { SVGProps } from 'react';

/**
 *Es un componente para el usuario login
 * @param props
 * @returns
 */
export default function UserLogeado(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={34}
      height={34}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M10.892 20.378a2.058 2.058 0 0 0-.309 1.105v.767c0 .326.108.587.344.824.235.235.496.343.823.343h11.5a1.1 1.1 0 0 0 .823-.343 1.1 1.1 0 0 0 .343-.824v-.767c0-.406-.102-.77-.308-1.105a2.043 2.043 0 0 0-.815-.766c-.941-.47-1.893-.82-2.855-1.054a12.45 12.45 0 0 0-2.938-.35c-.995 0-1.974.117-2.938.35l-3.67 1.82Zm0 0c.209-.34.478-.59.815-.766m-.815.766.815-.766m0 0c.94-.47 1.892-.82 2.854-1.054l-2.854 1.054ZM17.5 15.75c-.854 0-1.566-.295-2.177-.906-.612-.611-.907-1.324-.907-2.177 0-.854.295-1.566.907-2.177.61-.611 1.323-.907 2.177-.907.853 0 1.566.296 2.177.907.61.61.906 1.323.906 2.177 0 .853-.295 1.566-.906 2.177-.611.61-1.324.906-2.177.906Z"
          stroke="#fff"
          strokeWidth={1.5}
        />
      </g>
      <circle cx={17} cy={17} r={16.25} stroke="#fff" strokeWidth={1.5} />
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(6 5)" d="M0 0h23v23H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
