type Props = React.ComponentProps<'svg'>;
export function IconDark({ className, ...props }: Props) {
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
        d='M64.6095 127.764C67.3452 128.183 70.1471 128.4 73.0001 128.4C103.376 128.4 128 103.776 128 73.4C128 43.0242 103.376 18.3999 73.0001 18.3999C70.9621 18.3999 68.9498 18.5107 66.9695 18.7267C82.0375 30.1424 91.9999 49.9173 91.9999 72.3999C91.9999 96.0362 80.9887 116.68 64.6095 127.764ZM71.9999 144.4C111.764 144.4 144 112.164 144 72.3999C144 32.6354 111.764 0.399902 71.9999 0.399902C32.2354 0.399902 0 32.6354 0 72.3999C0 112.164 32.2354 144.4 71.9999 144.4Z'
        fill={props.color || 'var(--dark-color)'}
      />
    </svg>
  );
}
