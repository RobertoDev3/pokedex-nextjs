type Props = React.ComponentProps<'svg'>;
export function IconIce({ className, ...props }: Props) {
  return (
    <svg
      width='144'
      height='145'
      viewBox='0 0 144 145'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M108.085 11.3804L108.528 50.2914L74.5899 66.5833L74.1714 29.8439L108.085 11.3804Z'
        fill={props.color || 'var(--ice-color)'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M142.107 72.6944L108.51 91.9114L74.8936 72.664L108.493 55.015L142.107 72.6944Z'
        fill={props.color || 'var(--ice-color)'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M68.9176 72.6944L35.3209 91.9114L1.7041 72.664L35.3035 55.015L68.9176 72.6944Z'
        fill={props.color || 'var(--ice-color)'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34.9434 11.2211L69.8144 28.4914L68.9229 66.1272L35.998 49.8209L34.9434 11.2211Z'
        fill={props.color || 'var(--ice-color)'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M109.034 133.579L74.1633 116.308L75.0549 78.6724L107.98 94.979L109.034 133.579Z'
        fill={props.color || 'var(--ice-color)'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M36.1476 133.929L35.7043 95.018L69.6431 78.7261L70.0616 115.465L36.1476 133.929Z'
        fill={props.color || 'var(--ice-color)'}
      />
    </svg>
  );
}
