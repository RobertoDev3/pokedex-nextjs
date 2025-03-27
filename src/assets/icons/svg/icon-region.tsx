type Props = React.ComponentProps<'svg'>;
export function IconRegion({ className, ...props }: Props) {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M13 24.9166C3.79167 16.7916 4.33333 14.6249 3.25 10.8333H22.75C22.75 15.7083 18.4167 21.6666 13 24.9166Z'
        fill='white'
      />
      <path
        d='M22.75 10.8333H3.25C3.43056 7.94437 5.41667 1.62492 13 1.08325C20.0417 1.08325 22.5694 7.58326 22.75 10.8333Z'
        fill='#CD3131'
      />
      <circle cx='13' cy='10.8333' r='3.25' fill='white' />
      <path
        d='M22.75 10.8333C22.75 18.4166 13 24.9166 13 24.9166C13 24.9166 3.25 18.4166 3.25 10.8333C3.25 8.24739 4.27723 5.76744 6.10571 3.93896C7.93419 2.11048 10.4141 1.08325 13 1.08325C15.5859 1.08325 18.0658 2.11048 19.8943 3.93896C21.7228 5.76744 22.75 8.24739 22.75 10.8333Z'
        stroke='#173EA5'
        strokeWidth='1.625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13 14.0833C13.862 14.0833 14.6886 13.7408 15.2981 13.1313C15.9076 12.5219 16.25 11.6952 16.25 10.8333C16.25 9.9713 15.9076 9.14465 15.2981 8.53515C14.6886 7.92566 13.862 7.58325 13 7.58325C12.138 7.58325 11.3114 7.92566 10.7019 8.53515C10.0924 9.14465 9.75 9.9713 9.75 10.8333C9.75 11.6952 10.0924 12.5219 10.7019 13.1313C11.3114 13.7408 12.138 14.0833 13 14.0833V14.0833Z'
        stroke='#173EA5'
        strokeWidth='1.625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.25 10.8333L10.075 10.8333M15.925 10.8333L22.75 10.8333'
        stroke='#173EA5'
        strokeWidth='1.625'
      />
    </svg>
  );
}
