import { cn } from '@/lib/utils';

type Props = React.ComponentProps<'svg'>;
export function IconLoading({ className, ...props }: Props) {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('animate-spin', className)}
      {...props}
    >
      <path
        d='M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM8.76557 24C8.76557 32.4137 15.5863 39.2344 24 39.2344C32.4137 39.2344 39.2344 32.4137 39.2344 24C39.2344 15.5863 32.4137 8.76557 24 8.76557C15.5863 8.76557 8.76557 15.5863 8.76557 24Z'
        fill='url(#paint0_linear_1260_36246)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1260_36246'
          x1='24'
          y1='0'
          x2='24'
          y2='24'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#cd3131' />
          <stop offset='1' stopColor='#cd3131' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}
