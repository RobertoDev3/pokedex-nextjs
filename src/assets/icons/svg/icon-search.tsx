type Props = React.ComponentProps<'svg'>;
export function IconSearch({ className, ...props }: Props) {
  return (
    <svg
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 3.98477 11.3486 1 7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333Z'
        stroke='#666666'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.0005 15.9998L12.3755 12.3748'
        stroke='#666666'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
