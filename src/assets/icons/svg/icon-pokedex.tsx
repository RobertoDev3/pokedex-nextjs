type Props = React.ComponentProps<'svg'>;
export function IconPokedex({ className, ...props }: Props) {
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
        d='M2.16678 12.9999C2.16678 14.4226 2.44699 15.8313 2.99142 17.1457C3.53585 18.46 4.33382 19.6543 5.33979 20.6602C6.34576 21.6662 7.54002 22.4642 8.85438 23.0086C10.1687 23.553 11.5775 23.8333 13.0001 23.8333C14.4228 23.8333 15.8315 23.553 17.1459 23.0086C18.4602 22.4642 19.6545 21.6662 20.6604 20.6602C21.6664 19.6543 22.4644 18.46 23.0088 17.1457C23.5532 15.8313 23.8335 14.4226 23.8335 12.9999L13.0001 12.9999H2.16678Z'
        fill='white'
      />
      <path
        d='M23.8333 12.9998C23.8333 11.5772 23.5531 10.1685 23.0087 8.8541C22.4643 7.53974 21.6663 6.34548 20.6603 5.33951C19.6543 4.33355 18.4601 3.53557 17.1457 2.99114C15.8314 2.44672 14.4226 2.1665 13 2.1665C11.5773 2.1665 10.1686 2.44672 8.85425 2.99114C7.53989 3.53557 6.34563 4.33355 5.33967 5.33951C4.3337 6.34548 3.53572 7.53974 2.99129 8.8541C2.44687 10.1685 2.16666 11.5772 2.16666 12.9998L13 12.9998H23.8333Z'
        fill='#CD3131'
      />
      <circle cx='13.0002' cy='12.9995' r='3.25' fill='white' />
      <path
        d='M13 23.8332C18.9832 23.8332 23.8333 18.9831 23.8333 12.9998C23.8333 7.01659 18.9832 2.1665 13 2.1665C7.01674 2.1665 2.16666 7.01659 2.16666 12.9998C2.16666 18.9831 7.01674 23.8332 13 23.8332Z'
        stroke='#173EA5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.9999 16.25C13.8619 16.25 14.6885 15.9076 15.298 15.2981C15.9075 14.6886 16.2499 13.862 16.2499 13C16.2499 12.138 15.9075 11.3114 15.298 10.7019C14.6885 10.0924 13.8619 9.75 12.9999 9.75C12.138 9.75 11.3113 10.0924 10.7018 10.7019C10.0923 11.3114 9.74991 12.138 9.74991 13C9.74991 13.862 10.0923 14.6886 10.7018 15.2981C11.3113 15.9076 12.138 16.25 12.9999 16.25V16.25Z'
        stroke='#173EA5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.16666 12.9998H9.74999M16.25 12.9998H23.8333'
        stroke='#173EA5'
        strokeWidth='1.5'
      />
    </svg>
  );
}
