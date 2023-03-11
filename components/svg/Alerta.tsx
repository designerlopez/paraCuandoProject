export default function Alerta(props: any) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 13h-2V7h2m0 10h-2v-2h2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
        fill="#EF3F47"
      />
    </svg>
  );
}
