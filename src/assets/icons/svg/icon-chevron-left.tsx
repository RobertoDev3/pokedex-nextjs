type Props = React.ComponentProps<'svg'>;
export function IconChevronLeft({ className, ...props }: Props) {
  return (
    <svg
      width='38'
      height='38'
      viewBox='0 0 38 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M22.1667 12.6667L15.8333 19.0001L22.1667 25.3334'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
