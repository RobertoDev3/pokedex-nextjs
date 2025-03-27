type Props = React.ComponentProps<'svg'>;
export function IconArrowLeft({ className, ...props }: Props) {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M10.6666 15.9999H24'
        stroke='#333333'
        strokeWidth='2.26667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 9.33325L9.33334 15.9999'
        stroke='#333333'
        strokeWidth='2.26667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 22.6667L9.33331 16'
        stroke='#333333'
        strokeWidth='2.26667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
